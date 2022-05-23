import { useEffect, useState } from "react";

const useBlogs = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mdzubaidul/api/main/blogs.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return { posts, setPosts };
};

export default useBlogs;
