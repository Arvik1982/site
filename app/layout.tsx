
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Footer from "./components/Footer/Footer";



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
      <body >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
