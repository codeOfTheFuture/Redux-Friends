import React from 'react';

import { Card } from 'react-bootstrap';

function Friend(props) {
  return (
    <Card className="m-3 p-4 border border-secondary rounded">
      <Card.Title className="p-2 rounded bg-primary text-light">
        {props.friend.name}
      </Card.Title>
      <Card.Text>{props.friend.age}</Card.Text>
      <Card.Text>{props.friend.email}</Card.Text>
    </Card>
  );
}

export default Friend;
