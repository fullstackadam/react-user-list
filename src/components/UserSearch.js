import React from 'react';
import { connect } from 'react-redux';
import setTextFilter from '../actions/filters';
import { InputGroup, Input } from 'reactstrap';

const UserSearch = (props) => (
  <div className="row">
    <div className="col-md-12">
      <InputGroup>
        <Input
          placeholder="Search by first or last name"
          onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
          }}
        />
      </InputGroup>
    </div>
  </div>
);

export default connect()(UserSearch);