import React from 'react';
const _ = require('lodash');
const BS = require('react-bootstrap');
const {FormControl, Button } = BS;
const Auth = require('j-toker');

Auth.configure({
  apiUrl: 'http://localhost:3000'
})

class SignoutForm extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      errors: null
    }

    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick(ev) {
  Auth.signOut()
    .then(function(resp) {
      this.setState({
        errors: null
      })
    }.bind(this))
    .fail(function(resp) {
      this.setState({
        errors: resp.data.errors
      })
    }.bind(this));
}

  render() {
    return (
      <Button
        onClick={this.handleSignOutClick}
        >
        Sign Out
      </Button>
      )
  }
}

SignoutForm.defaultProps = {
  signedIn: false
}

export default SignoutForm
