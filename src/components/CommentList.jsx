import React from 'react';
import { ListGroup } from 'react-bootstrap';

const CommentList = ({ comments }) => (
  <div className="mb-3">
    <h5>評論區</h5>
    <ListGroup>
      {comments.map(comment => (
        <ListGroup.Item key={comment.id}>
          <strong>{comment.author}：</strong> {comment.content}
        </ListGroup.Item>
      ))}
    </ListGroup>
  </div>
);

export default CommentList;
