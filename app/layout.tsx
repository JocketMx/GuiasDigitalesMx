import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Guias Digitales Mx by GDMX',
  description: 'Created with v0',
  generator: 'v0.dev',
  openGraph: {
    title: 'Guias Digitales Mx by GDMX',
    description: 'Created with v0',
    siteName: 'Guias Digitales Mx by GDMX',
    images: [{ url: '/opengraph-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guias Digitales Mx by GDMX',
    images: ['/opengraph-image.png'],
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
