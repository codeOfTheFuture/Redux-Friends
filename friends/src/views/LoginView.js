import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class LoginView extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  onInputChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push('/friends-list');
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={this.state.credentials.username}
              onChange={this.onInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              placeholder="Password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(LoginView);
