import Head from "next/head";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { getBooks } from "../../lib/book";

const Books = ({ books }: any) => {
  return (
    <>
      <Head>
        <title>My NextJs | Books</title>
        <meta name="keywords" content="coders" />
      </Head>
      {books?.map((book: any) => (
        <Card className="my-3 shadow" key={book.bookName}>
          <Card.Body>
            <Card.Title>{book.bookName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/">
              <Button variant="dark">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const books = await getBooks();

  return {
    props: { books },
  };
};

export default Books;
