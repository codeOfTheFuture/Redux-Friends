import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Friend from './Friend';
import { handleModalShow } from '../actions';

import { Button } from 'react-bootstrap';

const FriendsList = props => {
  const handleModalShow = e => {
    e.preventDefault();
    props.handleModalShow();
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row justify-content-center align-items-center">
        <Button onClick={e => handleModalShow(e)} className="btn-primary mx-2">
          Add Friend
        </Button>
        <Link to="/">
          <Button className="btn-warning mx-2" onClick={() => signOut()}>
            Sign Out
          </Button>
        </Link>
      </div>
      <div className="d-flex flex-lg-wrap mt-5 align-items-center justify-content-center">
        {props.friendsList.map(friend => {
          return <Friend friend={friend} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { handleModalShow }
)(FriendsList);
