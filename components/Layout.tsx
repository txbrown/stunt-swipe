import Head from "next/head";
import Link from "next/link";
import React, { ReactNode } from "react";
import { Reset } from "./Reset";
import Theme from "./Theme";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <Theme>
    <Reset />
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
          <Link href="/stunt-doubles">
            <a>Stunt doubles List</a>
          </Link>{" "}
          | <a href="/api/stunt-doubles">Stunt doubles API</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  </Theme>
);

export default Layout;
