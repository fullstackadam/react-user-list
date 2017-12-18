import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1 className="text-center title-margin-top">
      404!
    </h1>
    <p>
      <Link to="/">Back to User List</Link>
    </p>
  </div>
);

export default NotFound;