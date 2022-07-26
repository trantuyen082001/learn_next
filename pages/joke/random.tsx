import Head from "next/head";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import { getRandomJoke } from "../../lib/joke";

const Random = ({ joke }: any) => {
  return (
    <>
      <Head>
        <title>My NextJs | Jokes</title>
        <meta name="keywords" content="coders" />
      </Head>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here is your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

//  dữ liệu phụ thuộc vào mỗi request, nhưng mà vẫn tạo ra 1 HTML tỉnh cho frontend nên vẫn tốt cho SEO
export const getServerSideProps = async () => {
  const joke = await getRandomJoke();

  return {
    props: { joke },
  };
};

export default Random;
