import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogItem from "./BlogItem";
import "./Blog.css";
import useBlogs from "../Hooks/useBlogs";
const Blog = () => {
  const { posts } = useBlogs();
  console.log(posts);
  return (
    <>
      <div className="blog_section_header">
        <Container>
          <Row>
            <Col md={12} lg={12}>
              {" "}
              <h1 className="blog_section_title">Blogs</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="blog_posts">
        <Container>
          <Row className="pt-5">
            {posts.map((post) => (
              <BlogItem key={post.id} post={post} />
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blog;
