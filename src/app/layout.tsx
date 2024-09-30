import '@mui/material-pigment-css/styles.css';

import React from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
  title: 'Mui 6 with PigmentCSS',
  description: 'A Next.js starter with MUI 6 and PigmentCSS',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--my-font-family',
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
