import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";
import dynamic from "next/dynamic";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <NavBar />
      </nav>
    </header>
    <body>{children}</body>
    <footer>
      <hr />
      <Footer />
    </footer>
  </div>
);

export default dynamic(() => Promise.resolve(Layout), { ssr: false });
