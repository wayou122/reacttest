import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from './components/MovieCard';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

const App = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', content: '很好看！' },
    { id: 2, author: 'Bob', content: '劇情有點老套。' },
  ]);

  const handleAddComment = (newComment) => {
    setComments([...comments, { id: comments.length + 1, ...newComment }]);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={12}>
          <MovieCard
            title="復仇者聯盟"
            description="地球最強英雄集結對抗邪惡勢力。"
          />
        </Col>
        <Col md={12}>
          <CommentList comments={comments} />
          <CommentForm onAddComment={handleAddComment} />
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <MovieCard
            title="復仇者聯盟"
            description="地球最強英雄集結對抗邪惡勢力。"
          />
        </Col>
        <Col md={6}>
          <CommentList comments={comments} />
          <CommentForm onAddComment={handleAddComment} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
