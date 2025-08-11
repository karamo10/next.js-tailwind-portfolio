import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/libs/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`; 
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error); 
    throw new Error('Failed to fetch user');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // The Credentials provider allows users to log in with a username and a password.
      async authorize(credentials) {
        // authorize function handle the authentication logic.
        const parsedCredentials = z // using zod to Validate the email and password before checking if user exists in the DB.
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);
        // after validating the credentials, now I can create a new getUser function that can queries the user from the DB.

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});

// Auth Method
// OAth(Google, Github)  -- Does user need to be in Database first --> NO
// Credentials Provider) -- Doest user need to be in Database first --> YES

// Notes
// OAuth(Google, Github) -- NextAuth will auto-create user on first login.
// Credentials Provider -- You must create the user manually or provide a signup form.
