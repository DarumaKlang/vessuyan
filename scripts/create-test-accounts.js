const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcryptjs');
require('dotenv').config({ path: '.env.local' });

async function createTestAccounts() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.error('Missing Supabase environment variables');
        return;
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const password = 'User@2026';
    const hashedPassword = await bcrypt.hash(password, 10);

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const testUsers = [
        { email: 'member@vessuyan.com', fullName: 'Standard Member', tier: 'FREE_MEMBER' },
        { email: 'sub@vessuyan.com', fullName: 'Premium Subscriber', tier: 'PREMIUM' }
    ];

    const now = new Date().toISOString();

    console.log('--- Creating Test Accounts ---');

    for (const userData of testUsers) {
        // 1. User
        let { data: user } = await supabase.from('User').select('id').eq('email', userData.email).single();
        let userId;

        if (user) {
            userId = user.id;
            await supabase.from('User').update({ password: hashedPassword, fullName: userData.fullName, updatedAt: now }).eq('id', userId);
        } else {
            userId = generateUUID();
            const { error: insertError } = await supabase.from('User').insert({
                id: userId, email: userData.email, password: hashedPassword, fullName: userData.fullName, createdAt: now, updatedAt: now
            });
            if (insertError) { console.error(`User error ${userData.email}:`, insertError); continue; }
        }

        // 2. Subscription
        let { data: sub } = await supabase.from('Subscription').select('id').eq('userId', userId).single();
        let subId;

        if (sub) {
            subId = sub.id;
            await supabase.from('Subscription').update({ tier: userData.tier, updatedAt: now }).eq('id', subId);
        } else {
            subId = generateUUID();
            const { error: subError } = await supabase.from('Subscription').insert({
                id: subId, userId: userId, tier: userData.tier, status: 'active', createdAt: now, updatedAt: now
            });
            if (subError) { console.error(`Sub error ${userData.email}:`, subError); continue; }
        }

        // 3. UsageLimit
        const limits = userData.tier === 'FREE_MEMBER' ? { h: 2, q: 1, c: 0 } : { h: 999, q: 999, c: 999 };

        let { data: limit } = await supabase.from('UsageLimit').select('id').eq('subscriptionId', subId).single();

        if (limit) {
            await supabase.from('UsageLimit').update({
                horoscopeRemainingThisWeek: limits.h,
                questionsRemainingThisWeek: limits.q,
                consultationsRemainingThisWeek: limits.c,
                updatedAt: now
            }).eq('id', limit.id);
        } else {
            await supabase.from('UsageLimit').insert({
                id: generateUUID(),
                subscriptionId: subId,
                horoscopeRemainingThisWeek: limits.h,
                questionsRemainingThisWeek: limits.q,
                consultationsRemainingThisWeek: limits.c,
                updatedAt: now,
                lastResetDate: now
            });
        }

        console.log(`✅ Success: ${userData.email} (${userData.tier})`);
    }
}

createTestAccounts();
