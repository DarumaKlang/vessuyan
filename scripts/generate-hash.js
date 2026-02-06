const bcrypt = require('bcryptjs');

async function generateHash() {
    const password = 'Admin@2026';
    const hash = await bcrypt.hash(password, 10);
    console.log('Password:', password);
    console.log('Hash:', hash);
    console.log('\nCopy this hash and use it in Prisma Studio or Supabase SQL Editor');
}

generateHash();
