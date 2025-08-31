import '@/app/ui/globals.css';
import NavBar from './ui/navigation/navbar';
import Footer from './ui/footer/footer';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata = {
  title: {
    template: "%s | Nextjs Tailwind Portfolio",
    default: "Nextjs Tailwind Portfolio Blog"
  },
  description: "Nextjs Tailwind Portfolio, built with App Router",
  metadataBase: new URL("https://next-js-tailwind-portfolio-git-main-karamos-projects-6675afec.vercel.app/"),
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`text-gray-00 min-h-screen flex flex-col`}>
        <NavBar />
        <Suspense fallback={<Loading />}>
        <main className="flex-1">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
