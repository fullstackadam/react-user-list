import React from 'react';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';

const UserList = (props) => (
  <div>
    {props.users.map((user) => <p key={user.id}>{user.firstName} {user.lastName}</p>)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    users: selectUsers(state.users, state.filters)
  };
};

export default connect(mapStateToProps)(UserList);