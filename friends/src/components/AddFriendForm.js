import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend, handleModalClose } from '../actions';

import { Modal, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class AddFriendForm extends Component {
  state = {
    id: null,
    name: '',
    age: null,
    email: ''
  };

  handleInputChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state);
    this.setState({
      id: null,
      name: '',
      age: null,
      email: ''
    });
  };

  handleModalClose = () => {
    this.props.handleModalClose();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Friend</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.addFriend}>
            <FormGroup>
              <Form.Label>Name</Form.Label>
              <FormControl
                type="text"
                placeholder="Name"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChanges}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Age</Form.Label>
              <FormControl
                type="number"
                placeholder="Age"
                name="age"
                value={this.state.value}
                onChange={this.handleInputChanges}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <FormControl
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChanges}
              />
            </FormGroup>
            <Button type="submit" onClick={this.handleModalClose}>
              Add Friend
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  console.log('MODAL STATE....', state);
  return {
    show: state.show.show
  };
};

export default connect(
  mapStateToProps,
  { addFriend, handleModalClose }
)(AddFriendForm);
