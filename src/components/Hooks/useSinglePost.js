import { useEffect, useState } from "react";
import useBlogs from "./useBlogs";

const useSinglePost = (id) => {
  const { posts } = useBlogs();
  const [item, setItem] = useState([]);
  useEffect(() => {
    const exitItem = posts.find((service) => service.id === id);
    if (exitItem) {
      setItem(exitItem);
    } else {
      setItem("Not found posts!");
    }
  }, [id, posts]);

  return { item, setItem };
};

export default useSinglePost;
