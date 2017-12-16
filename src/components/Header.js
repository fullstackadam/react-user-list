import React from 'react';
import { connect } from 'react-redux';
import selectUsers from '../selectors/users';

const Header = ({ userCount }) => (
  <header>
    <div>
      <h1>USERS ({userCount})</h1>
    </div>
  </header>
);

const mapStateToProp = (state) => {
  return {
    userCount: selectUsers(state.users, state.filters).length
  };
};

export default connect(mapStateToProp)(Header);