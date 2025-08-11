// scripts/test-connection.ts
import dotenv from 'dotenv';
dotenv.config();

import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: 'require',
});

async function testConnection() {
  try {
    const result = await sql`SELECT NOW()`;
    console.log('Connected to database:', result);
    process.exit(0);
  } catch (error) {
    console.error('Failed to connect:', error);
    process.exit(1);
  }
}

testConnection();
