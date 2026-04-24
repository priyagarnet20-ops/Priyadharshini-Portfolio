import './globals.css';

export const metadata = {
  title: 'Priyadharshini S — Portfolio',
  description: 'Portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
