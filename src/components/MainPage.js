import React from 'react';
// import HeaderUserCount from './HeaderUserCount';
import UserSearch from './UserSearch';
import UserList from './UserList';
import AddUser from './AddUser';

export default () => (
  <div>
    {/*<HeaderUserCount />*/}
    <UserSearch />
    <hr />
    <UserList />
    <AddUser />
  </div>
);