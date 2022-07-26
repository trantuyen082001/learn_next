import axios from "axios";

export const getPosts = async (limit: any) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    return res.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const getPostIds = async (limit: any) => {
  const posts = await getPosts(limit);

  //   return posts.map((post: any) => `/posts/${post.id}`);
  return posts.map((post: any) => ({
    params: {
      id: `${post.id}`,
    },
  }));
};

export const getPostById = async (id: string) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return res.data;
  } catch (error) {
    console.log("Error ne: ", error);
  }
};
