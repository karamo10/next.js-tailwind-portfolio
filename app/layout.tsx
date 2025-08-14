import '@/app/ui/globals.css';
import NavBar from './ui/navigation/navbar';
import Footer from './ui/footer/footer';
import { Suspense } from 'react';
import Loading from './loading';


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
