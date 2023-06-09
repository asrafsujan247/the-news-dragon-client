import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsights from "../EditorsInsights/EditorsInsights";
import useTitle from "../../../hooks/useTitle";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  useTitle("News");
  return (
    <div>
      <Card className="p-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body className="p-0 mt-3">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowLeft className="mb-1 me-1"></FaArrowLeft> All news in this
              category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsights></EditorsInsights>
    </div>
  );
};

export default News;
