import Head from "next/head";
import { ReactNode } from "react";
import Container from "react-bootstrap/Container";
import NavbarMenu from "./NavbarMenu";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => (
  <Container>
    <Head>
      <title>My NextJs</title>
    </Head>
    <header>
      <NavbarMenu />
    </header>
    <main>{children}</main>
  </Container>
);

export default Layout;
