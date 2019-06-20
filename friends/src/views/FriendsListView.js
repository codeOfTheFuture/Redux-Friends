import React, { Component } from 'react';
import { getFriends } from '../actions';
import { connect } from 'react-redux';

class FriendsListView extends Component {
  componentWillMount() {
    const result = this.props.getFriends();
    console.log('componentWillMount: ', result);
  }

  render() {
    return (
      <div>
        <h1>Friends List</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('mstp: ', state);
  return {
    friends: state.friends.friends,
    isLoading: state.friends.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
