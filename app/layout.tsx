import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./storeProvider";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";

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
      <head>
      <link
          rel="preload"
          as="image"
          href='./public/gig_2.gif'
          sizes="180x180"
        />
      </head>
      <body>
        <StoreProvider>
          <DisplayComponent reference={'/common/login'}>
            <Header />
          </DisplayComponent>
          {children}
          <DisplayComponent reference={'/common/login'}>
            <Footer />
          </DisplayComponent>
        </StoreProvider>
      </body>
    </html>
  );
}
