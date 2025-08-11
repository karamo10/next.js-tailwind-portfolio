// scripts/seed.ts
import dotenv from 'dotenv';
dotenv.config();
import postgres from 'postgres';
import bcrypt from 'bcrypt';
import {
  projects,
  clients,
  skills,
  avatars,
  users,
} from '@/libs/placeholder-data';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

async function seed() {
  try {
    // Drop and recreate tables (optional for clean state)
    await sql`DROP TABLE IF EXISTS projects, clients, skills, avatars, users`;

    await sql`
      CREATE TABLE projects (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image_url TEXT NOT NULL,
        button_label TEXT NOT NULL,
        button_url TEXT NOT NULL
      )
    `;

    await sql`
      CREATE TABLE clients (
        id SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL
      )
    `;

    await sql`
      ALTER TABLE clients
      ADD COLUMN IF NOT EXISTS title TEXT,
      ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
      ADD COLUMN IF NOT EXISTS client TEXT,
      ADD COLUMN IF NOT EXISTS date DATE,
      ADD COLUMN IF NOT EXISTS summary TEXT,
      ADD COLUMN IF NOT EXISTS tags TEXT[],
      ADD COLUMN IF NOT EXISTS content TEXT;
    `;

    await sql`
      CREATE TABLE skills (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        icon_name TEXT
      )
    `;

    await sql`
      CREATE TABLE avatars (
        index SERIAL PRIMARY KEY,
        image_url TEXT NOT NULL
      )
    `;

    await sql`
     CREATE TABLE users (
     id SERIAL PRIMARY KEY,
     name TEXT NOT NULL,
     email TEXT UNIQUE NOT NULL,
     password TEXT NOT NULL,
     created_at TIMESTAMP DEFAULT NOW()
     )
    `;

    for (const project of projects) {
      await sql`
        INSERT INTO projects 
        (title, description, image_url, button_label, button_url)
        VALUES (${project.title}, ${project.description}, ${project.image_url}, ${project.button_label}, ${project.button_url})
      `;
    }

    for (const client of clients) {
      await sql`
        INSERT INTO clients (image_url, title, slug, client, date, summary, tags, content)
        VALUES (${client.image_url}, ${client.title}, ${client.slug}, ${
        client.client
      }, ${client.date}, ${client.summary}, ${sql.array(client.tags)}, ${
        client.content
      })
        ON CONFLICT (slug) DO NOTHING
      `;
    }

    for (const skill of skills) {
      const icon = skill.icon_name ?? skill.icon_image ?? null;
      await sql`
        INSERT INTO skills (title, description, icon_name)
        VALUES (${skill.title}, ${skill.description}, ${icon})
      `;
    }

    for (const avatar of avatars) {
      await sql`
        INSERT INTO avatars (image_url)
        VALUES (${avatar.image_url})
      `;
    }

    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10); // (salt round) tells bcrypt how many times to run the hashing algorithm internally.
      await sql`INSERT INTO users
      ( name, email, password)
      VALUES (${user.name}, ${user.email}, ${hashedPassword})
      ON CONFLICT (email) DO NOTHING 
      `;
      console.log('Hashed Pashword', hashedPassword);
      console.log(`Seeding completed! ${user.email}`);
    }

    console.log('Seeding clients table completed!');
    process.exit(0);
  } catch (err) {
    console.error(' Seeding failed:', err);
    process.exit(1);
  }
}

seed();
