import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { addUser } from '../actions/users';

const AddUserPage = (props) => (
  <UserForm onSubmit={(user) => {
    props.dispatch(addUser(user));
    props.history.push('/');
  }} />
);

export default connect()(AddUserPage);