import postgres from 'postgres';
import { Project, Skill, Client } from './definitions';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

export async function fetchAllProject(): Promise<Project[]> {
  try {
    const data = await sql<Project[]>`SELECT * FROM projects`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export async function fetchSkill() {
  return await sql`SELECT * FROM skills`;
}

export async function fetchClient(): Promise<Client[]> {
  try {
    const data = await sql<Client[]>`SELECT * FROM clients`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export async function fetchClientBySlug(slug: string): Promise<Client[]> {
return await sql<Client[]>`
   SELECT * FROM clients
   WHERE clients.slug = ${slug}`;
  // const result = await sql<Client[]>`
  // SELECT * FROM clients
  // WHERE clients.slug = ${slug}
  // `;
  // return result[0] || null;
  
}

export async function fetchClientsByName(client: string): Promise<Client[]> {
  try {
    const searchTerm = `%${client}%`;
    const result = await sql<Client[]>`
    SELECT * FROM clients
    WHERE title ILIKE ${searchTerm}
    ORDER BY id DESC
    `;
    return result;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}
