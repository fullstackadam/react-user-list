import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';

const AddUserPage = (props) => (
  <div>
    <h3 className="title-margin-top">Add User</h3>
    <UserForm
      buttonText="create new user"
      onSubmit={(user) => {
        props.dispatch(addUser(user));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddUserPage);