import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser } from '../actions/users';
import { Button } from 'reactstrap';

const UserListItem = (props) => (
  <div className="row user-list-item">
    <div className="col-md-8 user-list-item__text">
      <p className="text-capitalize">{props.firstName} {props.lastName}</p>
      <p>{props.address} {props.city}, {props.state} {props.zip}</p>
    </div>
    <div className="col-md-4 d-flex flex-column justify-content-between user-list-item__buttons">
      <Link
        to={`/edit/${props.id}`}
        className="remove-link-decoration"
      >
        <Button
          size="sm"
          color="warning"
          block
        >
          EDIT
        </Button>
      </Link>
      <Button
        size="sm"
        color="danger"
        block
        onClick={() => {
          props.dispatch(removeUser({ id: props.id }));
        }}
      >
        DELETE
      </Button>
    </div>
    <hr />
  </div>
);

export default connect()(UserListItem);