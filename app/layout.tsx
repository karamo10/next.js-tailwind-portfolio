import '@/app/ui/globals.css'
import NavBar from "./ui/navbar";
import { roboto } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
          <body className={`${roboto.className} antialiased text-gray-700`}>
              <NavBar />
              {children}
          </body>
    </html>
  );
}
