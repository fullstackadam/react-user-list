import React from 'react';
import moment from 'moment';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: props.user ? props.user.firstName : '',
      lastName: props.user ? props.user.lastName : '',
      address: props.user ? props.user.address : '',
      city: props.user ? props.user.city : '',
      state: props.user ? props.user.state : '',
      zip: props.user ? props.user.zip : '',
      error: ''
    };
  }

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onAddressChange = (e) => {
    const address = e.target.value;
    this.setState(() => ({ address }));
  };

  onCityChange = (e) => {
    const city = e.target.value;
    this.setState(() => ({ city }));
  };

  onStateChange = (e) => {
    const state = e.target.value;
    this.setState(() => ({ state }));
  };

  onZipChange = (e) => {
    const zip = e.target.value;
    this.setState(() => ({ zip }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.firstName || !this.state.city || !this.state.state) {
      this.setState(() => ({ error: 'First name city and state are required!'}));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip
      });
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            {!this.state.error || <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
              <div>
              <InputGroup>
                <Input
                  placeholder="First Name"
                  value={this.state.firstName}
                  onChange={this.onFirstNameChange}
                />
                <Input
                  placeholder="Last Name"
                  value={this.state.lastName}
                  onChange={this.onLastNameChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="Street Address"
                  value={this.state.address}
                  onChange={this.onAddressChange}
                />
              </InputGroup>
              <InputGroup>
                <Input
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onCityChange}
                />
                <Input
                  placeholder="State"
                  maxLength={2}
                  value={this.state.state}
                  onChange={this.onStateChange}
                />
                <Input
                  placeholder="Zipcode"
                  maxLength={5}
                  value={this.state.zip}
                  onChange={this.onZipChange}
                />
              </InputGroup>
              <InputGroup>
                <Button
                  size="lg"
                  color="success"
                  block
                >
                  {this.props.buttonText.toUpperCase()}
                </Button>
              </InputGroup>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
          <p style={{ marginTop: '10px' }}>
            <Link to="/">Back to User List</Link>
          </p>
          </div>
        </div>
      </div>
    );
  }
}