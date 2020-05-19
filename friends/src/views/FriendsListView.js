import React, { Component } from 'react';
import { getFriends } from '../actions';
import { connect } from 'react-redux';
import FriendsList from '../components/FriendsList';
import AddFriendForm from '../components/AddFriendForm';

class FriendsListView extends Component {
  componentWillMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <React.Fragment>
        <AddFriendForm />
        <div className="d-flex flex-row my-4">
          <FriendsList friendsList={this.props.friends} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends,
    isLoading: state.friends.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(FriendsListView);
