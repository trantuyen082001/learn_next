import Link from "next/link";
import { Button, Card, Spinner } from "react-bootstrap";
import { getPostById, getPostIds } from "../../lib/post";
import { useRouter } from "next/router";
import Head from "next/head";

const Post = ({ post }: any) => {
  const router = useRouter();

  //  nếu trang chưa tạo ra, isFallback của router === true
  //  Trang tạm thời sau đây sẽ được render
  if (router.isFallback) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  //  khi getStaticProps() chạy xong lần đâu tiên
  return (
    <>
      <Head>
        <title>My NextJs | Post</title>
        <meta name="keywords" content="coders" />
      </Head>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts">
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  console.log(paths);

  return {
    paths,
    //  bất kì path nào kh returned bỏi getStaticPaths sẽ tới trang 404
    // fallback: false,
    //  path nào kh returned ngay lập tức sẽ show tới trang 'tạm' => đợi getSaticProps chạy
    // => getStaticProps chạy xong => return trang hoàn chỉnh
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    // sẽ auto gửi request lên xem database có bị thay đổi hay không, nếu có thì sẽ auto cập nhật lại
    // nhiều nhất 1 lần trong 1 giây
    // revialidate: 1,
  };
};

export default Post;
