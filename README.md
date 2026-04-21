## My First Next.js Project
This project marks my transition to full-stack development using the Next.js App Router. It focuses on server-side logic, secure authentication, and strict type safety.

---

### Tech Stack
* ***Framework:*** Next.js 15 (App Router)

* ***Database:*** PostgreSQL

* ***Authentication:*** NextAuth.js (Credentials Provider)

* ***Validation:*** Zod

***Styling:*** Tailwind 

---

### Key Features

***Protected Blog:*** Implemented a blog system where specific routes are restricted to authenticated users via NextAuth.

Server Actions: Handled all data mutations (CRUD operations) using Server Actions, eliminating the need for manual API route management.

Type-Safe Forms: Integrated Zod schemas to validate user input on the server, ensuring data integrity before it reaches the PostgreSQL database.

Server Components: Leveraged React Server Components to optimize data fetching and reduce client-side JavaScript.

Technical Challenge: Next.js 15 Async Params
The most significant learning curve involved a specific change in Next.js 15 regarding dynamic routes.

In this version, params and searchParams are now treated as Promises in Server Components. While they still behave like objects at runtime, TypeScript requires them to be awaited to function correctly. This ensures the framework can handle future rendering optimizations.

Incorrect Pattern (Next.js 14 & earlier):

TypeScript
export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug; 
  // Throws a type error in Next.js 15
}
Correct Pattern (Next.js 15):

TypeScript
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Proper asynchronous handling
}
Lessons Learned
As my first Next.js project, this taught me how to manage the "Server-First" mindset. Navigating the shift from treating props as synchronous objects to asynchronous promises was a breakthrough that deepened my understanding of the Next.js execution model
