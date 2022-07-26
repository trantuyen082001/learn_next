import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className=" ">
      <h1>Ooppps...</h1>
      <h2>That page can not be found</h2>
      <p>
        Going back to the{" "}
        <Link href="/">
          <a>Home Page</a>
        </Link>{" "}
        is 3 seconds ...
      </p>
    </div>
  );
};

export default NotFound;
