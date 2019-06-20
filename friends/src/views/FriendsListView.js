import React, { Component } from 'react';
import { getFriends } from '../actions';
import { connect } from 'react-redux';
import FriendsList from '../components/FriendsList';

class FriendsListView extends Component {
  componentWillMount() {
    this.props.getFriends();
  }

  render() {
    console.log('this.props.friends: ', this.props.friends);
    return (
      <div>
        <FriendsList friendsList={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('this is the state: ', state.friends);
  return {
    friends: state.friends.friends,
    isLoading: state.friends.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
