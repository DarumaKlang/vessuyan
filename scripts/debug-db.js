const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

async function debugDB() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('--- Debugging Subscription Table ---');

    const { data: subs, error: subError } = await supabase
        .from('Subscription')
        .select('*');

    if (subError) {
        console.error('Error fetching subscriptions:', subError);
    } else {
        console.log('Subscriptions:', JSON.stringify(subs, null, 2));
    }

    const { data: users, error: userError } = await supabase
        .from('User')
        .select('id, email, fullName');

    if (userError) {
        console.error('Error fetching users:', userError);
    } else {
        console.log('Users:', JSON.stringify(users, null, 2));
    }
}

debugDB();
