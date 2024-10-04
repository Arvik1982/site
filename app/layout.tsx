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
        {/* <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        /> */}
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
