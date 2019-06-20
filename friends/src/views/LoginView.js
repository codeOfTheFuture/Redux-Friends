import React, { Component } from 'react';

export default class LoginView extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              name="username"
              value={this.state.username}
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
              value={this.state.password}
              onChange={this.onInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
