import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './views/LoginView';
import FriendsListPage from './views/FriendsListView';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { Container } from 'react-bootstrap';
import './styles/App.css';

function App(props) {
  return (
    <Container className="App d-flex flex-column justify-content-center align-items-center bg-secondary rounded mt-3">
      <h1 className="text-danger mt-4 text-uppercase">
        {props.loggingIn ? (
          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
        ) : (
          'Redux Friends'
        )}
      </h1>
      <Route exact path="/" component={LoginPage} />
      <Route path="/friends-list" component={FriendsListPage} />
    </Container>
  );
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  {}
)(App);
