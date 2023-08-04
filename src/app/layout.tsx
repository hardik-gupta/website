import "./globals.css";
import { Footer, Navbar } from "@/component/components";
import React, { PropsWithChildren } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Code for GovTech | Digital Public Goods',
  description:
    "Code for GovTech (C4GT) has been introduced as India's first program, aimed at creating a community that can build and contribute to global Digital Public Goods (DPGs).",
}

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes="any"/>
      </head>
      <body>
        {/* <Navbar /> */}
        {children}
        <hr></hr>
        {/* <Footer /> */}
      </body>
    </html>
  );
};
export default Layout;

