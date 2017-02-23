import React from 'react';
const BS = require('react-bootstrap');
const { FormControl, Button } = BS;
const _ = require('lodash');
const Auth = require('j-toker');

Auth.configure({
  apiUrl: 'http://localhost:3000'
})


class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: null
    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
    this.handleSignInClick=this.handleSignInClick.bind(this);
  }

  handleInputChange(ev) {
    var nextState = _.cloneDeep(this.state);
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  }

  handleOnSubmit(e) {
    console.log('inside handle on sbumit', e);
  }

  handleSignInClick(e){
    Auth.emailSignIn({
    email:    this.state.email,
    password: this.state.password,
    config:   this.props.config
  })

    .then(function(resp) {
      console.log('success');
      this.setState({
        email: '',
        password: '',
        errors: null
      });
    }.bind(this))

    .fail(function(resp) {
      this.setState({
        errors: resp.data.errors
      });
    }.bind(this));
  }

  render() {
    return(
      <div>
        <form>
          <FormControl
            type='email'
            name='email'
            label='Email'
            placeholder='Enter email...'
            value={this.state.email}
            onChange={this.handleInputChange} />

          <FormControl
            type='password'
            name='password'
            label='Password'
            placeholder='Enter password...'
            value={this.state.password}
            onChange={this.handleInputChange} />

          <Button className='btn btn-primary'
            onClick={this.handleSignInClick}
            disabled={this.props.signedIn}>
            Sign In
          </Button>
        </form>
       </div>
    )
  }
}

LoginForm.defaultProps = {
  signedIn: false,
  config: 'default'
}

export default LoginForm;
