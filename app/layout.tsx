import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import StoreProvider from "./storeProvider";
import DisplayComponent from "./components/DisplayComponent/DisplayComponent";
import topBGround from "./public/dev_img_2.jpg";
import itemBGround from "./public/dev_img.jpg";
import headerBGround from "./public/dev_img_5.jpg";
import ContentContainer from "./components/ContentContainer/ContentContainer";

export const metadata: Metadata = {
  title: "Developer's page",
  description: "React Next разработка",
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
          rel="prefetch"
          href="https://yandex.ru/map-widget/v1/?lang=ru_RU&scroll=true&source=constructor-api&um=constructor%3Ac5a1c37a827694896a0656bef767fdca51f779075988af24becdd32414a7115c"
        />
        <link rel="preload" as="image" href={topBGround.src} />
        <link rel="preload" as="image" href={itemBGround.src} sizes="300x300" />
        <link
          rel="preload"
          as="image"
          href={headerBGround.src}
          sizes="300x300"
        />
      </head>
      <body>
        <StoreProvider>
          <DisplayComponent reference={"/common/login"}>
            <Header />
          </DisplayComponent>
          <ContentContainer>{children}</ContentContainer>
          <DisplayComponent reference={"/common/login"}>
            <Footer />
          </DisplayComponent>
        </StoreProvider>
      </body>
    </html>
  );
}
