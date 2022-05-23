import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useSinglePost from "../Hooks/useSinglePost";

const BlogSingle = () => {
  const params = useParams();
  const {
    item: { title, img, description },
  } = useSinglePost(params.id);
  console.log(description);
  return (
    <>
      <div className="single_post">
        <Container>
          <Row className="justify-content-center mt-5 mb-5">
            <Col lg={8}>
              <div className="post_content text-center">
                <img src={img} className="w-75" alt="" />
                <h1>{title}</h1>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                ></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogSingle;
