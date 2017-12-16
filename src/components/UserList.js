import React from 'react';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';
import UserListItem from './UserListItem';

const UserList = (props) => (
  <div>
    {props.users.map((user) => <UserListItem key={user.id} {...user} />)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, state.filters)
  };
};

export default connect(mapStateToProps)(UserList);