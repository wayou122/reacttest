import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CommentForm = ({ onAddComment }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && content) {
      onAddComment({ author, content });
      setAuthor('');
      setContent('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>你的名字</Form.Label>
        <Form.Control
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>評論內容</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button type="submit">送出評論</Button>
    </Form>
  );
};

export default CommentForm;
