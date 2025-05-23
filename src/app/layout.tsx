"use client";
import { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../../store/store";

interface RootLayoutProps {
  children: ReactNode;
}

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Nunito:400,400i,500,600,700&display=swap"
        />
        {/* <link rel="icon" href="./favicon.ico" /> */}
      </head>
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
