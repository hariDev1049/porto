import type { Metadata } from 'next';
import { Inter, Manrope, Montserrat } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllComp from './components/AllComp/AllComp';
import { ThemeProvider } from './context/ThemeContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const manrope = Manrope({ subsets: ['latin'] });

const monso = Montserrat({ subsets: ['latin'] });

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
      <body className={monso.className}>
        <ThemeProvider>
          <AllComp>{children}</AllComp>
          <ToastContainer position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
