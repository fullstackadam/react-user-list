import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../actions/users';

const UserListItem = (props) => (
  <div>
    <div>
      <p>{props.firstName} {props.lastName}</p>
      <p>{props.address}</p>
      <p>{props.city}, {props.state} {props.zip}</p>
    </div>
    <div>
      <Link to={`/edit/${props.id}`}><button>EDIT</button></Link>
      <button onClick={() => {
        props.dispatch(removeUser({ id: props.id }));
      }}>DELETE</button>
    </div>
  </div>
);

export default connect()(UserListItem);