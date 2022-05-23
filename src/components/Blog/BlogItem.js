import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  const { id, title, img, description } = props.post;
  console.log(props);
  return (
    <Col md={6} lg={4}>
      <div className="blog_item">
        <div className="blog_thum">
          <img src={img} alt="" />
        </div>
        <div className="blog_content">
          <h2>{title}</h2>
          <p
            dangerouslySetInnerHTML={{ __html: description.slice(0, 200) }}
          ></p>
          <div>
            <Link to={`/posts/${id}`}>Read more</Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogItem;
