import React from 'react';
import Friend from './Friend';

const FriendsList = props => {
  return (
    <ul>
      {props.friendsList.map(friend => {
        return <Friend friend={friend} />;
      })}
    </ul>
  );
};

export default FriendsList;
