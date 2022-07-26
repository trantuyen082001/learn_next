import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/post";

const Posts = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>My NextJs | Posts</title>
        <meta name="keywords" content="coders" />
      </Head>
      {posts?.map((post: any) => (
        <Card key={post.id} className="my-3 shadow">
          <Card.Body>
            <Card.Title>
              {post.id} -- {post.title}
            </Card.Title>
            <Card.Text>{post.body}</Card.Text>
            <Link href={`/posts/${post.id}`} passHref>
              <Card.Link>See more</Card.Link>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getPosts(10);

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
