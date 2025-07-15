import postgres from 'postgres';
import { Project, Skill } from './definitions';
import { error } from 'console';

const sql = postgres(process.env.DATABASE_URL!, { ssl: 'require' });

// export async function fetchClient() {
//     try {

//         const data = await sql<Client[]>`SELECT * FROM clients`;

//         return data;

//     } catch (error) {
//         console.error('Database Error:', error)
//    }
// }

export async function fetchProject() {
  try {
    const data = await sql<Project[]>`SELECT * FROM projects`;

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}


export async function fetchSkill() {
  
  try {
    const data = await sql<Skill[]>`SELECT * FROM skills`;
    
    return data;

  } catch {
    console.error('Database Error:', error)
  }
}
