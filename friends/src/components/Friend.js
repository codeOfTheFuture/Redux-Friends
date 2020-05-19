import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

import { Card, Button } from 'react-bootstrap';

const Friend = props => {
  const deleteFriend = () => {
    props.deleteFriend(props.friend.id);
  };

  return (
    <Card className="m-3 p-4 border border-secondary rounded">
      <Card.Title className="p-2 rounded bg-primary text-light">
        {props.friend.name}
      </Card.Title>
      <Card.Text>{props.friend.age}</Card.Text>
      <Card.Text>{props.friend.email}</Card.Text>
      <div>
        <Button size="sm" variant="info" className="mx-1">
          Update
        </Button>
        <Button
          size="sm"
          variant="outline-danger"
          className="mx-4"
          onClick={() => deleteFriend()}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { deleteFriend }
)(Friend);
