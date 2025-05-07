import React from 'react';
import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description }) => (
  <Card>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
    </Card.Body>
  </Card>
);

export default MovieCard;
