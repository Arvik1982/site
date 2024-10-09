import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./storeProvider";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import topBGround from "./public/dev_img_2.jpg";
import itemBGround from "./public/dev_img.jpg";
import ContentContainer from "./components/ContentContainer/ContentContainer";

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
        <link rel="preload" as="image" href={topBGround.src} />
        <link rel="preload" as="image" href={itemBGround.src} sizes="300x300" />
      </head>
      <body>
        <StoreProvider>
          <DisplayComponent reference={"/common/login"}>
            <Header />
          </DisplayComponent>
          <ContentContainer>
          {children}
          </ContentContainer>
          <DisplayComponent reference={"/common/login"}>
            <Footer />
          </DisplayComponent>
        </StoreProvider>
      </body>
    </html>
  );
}
