import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hariprasad M V',
  description: 'Personal Web Dev Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
