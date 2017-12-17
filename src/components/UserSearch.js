import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';

const UserSearch = (props) => (
  <div>
    <input
      type="text"
      name="searchText"
      placeholder="Search by first or last name"
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </div>
);

export default connect()(UserSearch);