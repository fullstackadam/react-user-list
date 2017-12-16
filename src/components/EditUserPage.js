import React from 'react';
import UserForm from './UserForm';
import { connect } from 'react-redux';
import { editUser } from '../actions/users';

const EditUserPage = (props) => (
  <UserForm
    user={props.user}
    onSubmit={(user) => {
    props.dispatch(editUser(props.user.id, user));
    props.history.push('/');
  }}/>
);

const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditUserPage);