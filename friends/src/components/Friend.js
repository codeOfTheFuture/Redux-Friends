import React from 'react';

function Friend(props) {
  return (
    <React.Fragment>
      <li>{props.friend.name}</li>
      <li>{props.friend.age}</li>
      <li>{props.friend.email}</li>
    </React.Fragment>
  );
}

export default Friend;
