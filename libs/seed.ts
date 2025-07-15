// scripts/seed.ts

import postgres from 'postgres';
import { projects, clients, skills, avatars } from '@/libs/placeholder-data';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

async function seed() {
  try {
    // Drop and recreate tables (optional for clean state)
    await sql`DROP TABLE IF EXISTS projects, clients, skills, avatars`;
    
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

    // Insert projects
    for (const project of projects) {
      await sql`
        INSERT INTO projects 
        (title, description, image_url, button_label, button_url)
        VALUES (${project.title}, ${project.description}, ${project.image_url}, ${project.button_label}, ${project.button_url})
      `;
    }

    // Insert clients
    for (const client of clients) {
      await sql`
        INSERT INTO clients (image_url)
        VALUES (${client.image_url})
      `;
    }

    // Insert skills
    for (const skill of skills) {
      const icon = skill.icon_name ?? skill.icon_image ?? null;
      await sql`
        INSERT INTO skills (title, description, icon_name)
        VALUES (${skill.title}, ${skill.description}, ${icon})
      `;
    }

    // Insert avatars
    for (const avatar of avatars) {
      await sql`
        INSERT INTO avatars (image_url)
        VALUES (${avatar.image_url})
      `;
    }

    console.log('Seeding completed!');
    process.exit(0);
  } catch (err) {
    console.error(' Seeding failed:', err);
    process.exit(1);
  }
}

seed();
