import React from 'react';
import { Link } from 'react-router-dom';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';

export default () => (
  <div className="row">
    <div className="col-md-12">
      <Link to="/create" className="remove-link-decoration">
        <Button size="lg" color="success" block>ADD USER</Button>
      </Link>
    </div>
  </div>
);