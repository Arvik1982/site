import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";



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
        <Header/>
        {children}
        <footer>footer</footer>
      </body>
    </html>
  );
}
