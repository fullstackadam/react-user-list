import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({
  id,
  firstName = '',
  lastName = '',
  address = '',
  city = '',
  state = '',
  zip = ''
}) => (
  <div>
    <div>
      <p>{firstName} {lastName}</p>
      <p>{address}</p>
      <p>{city}, {state} {zip}</p>
    </div>
    <div>
      <Link to={`/edit/${id}`}><button>EDIT</button></Link>
      <button>DELETE</button>
    </div>
  </div>
);

export default UserListItem;