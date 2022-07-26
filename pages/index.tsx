import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My NextJs | Home</title>
        <meta name="keywords" content="coders" />
      </Head>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>This is my Next App</p>
        <hr />

        <Link href="/posts">
          <Button variant="primary">Posts</Button>
        </Link>
      </Alert>
    </>
  );
};

export default Home;
