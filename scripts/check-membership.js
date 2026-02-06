const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function checkMembership() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('--- User Membership Status ---');

    // Try fetching Users first
    const { data: users, error: userError } = await supabase
        .from('User')
        .select('*');

    if (userError) {
        console.error('Error fetching users:', userError);
        return;
    }

    // Fetch all subscriptions
    const { data: subs, error: subError } = await supabase
        .from('Subscription')
        .select('*');

    if (subError) {
        console.error('Error fetching subscriptions:', subError);
        return;
    }

    users.forEach(user => {
        const userSub = subs.find(s => s.userId === user.id);
        const tier = userSub ? userSub.tier : 'NO_SUBSCRIPTION';
        const status = userSub ? userSub.status : 'N/A';

        console.log(`Email: ${user.email.padEnd(25)} | Name: ${String(user.fullName).padEnd(15)} | Tier: ${tier.padEnd(12)} | Status: ${status}`);
    });
}

checkMembership();
