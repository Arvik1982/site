import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Example app",
  description: "next js example app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <header>header</header>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
