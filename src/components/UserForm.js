import React from 'react';
import moment from 'moment';

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
        {!this.state.error || <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.onFirstNameChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="streetAddress"
              placeholder="Street Address"
              value={this.state.address}
              onChange={this.onAddressChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              onChange={this.onCityChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={this.state.state}
              onChange={this.onStateChange}
            />
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={this.state.zip}
              onChange={this.onZipChange}
            />
          </div>
          <div>
            <button>UPDATE</button>
          </div>
        </form>
      </div>
    );
  }
}