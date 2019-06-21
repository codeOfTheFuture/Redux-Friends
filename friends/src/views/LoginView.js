import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

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
      <Form
        onSubmit={this.login}
        className="my-5 p-5 border border-secondary rounded bg-light w-100"
      >
        <FormGroup>
          <Form.Label htmlFor="username">Username</Form.Label>
          <FormControl
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            value={this.state.credentials.username}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Form.Label htmlFor="password">Password</Form.Label>
          <FormControl
            type="text"
            id="password"
            placeholder="Password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <Button type="submit" className="btn-primary">
          Login
        </Button>
      </Form>
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
