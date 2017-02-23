import React from 'react';
const BS = require('react-bootstrap');
const { FormControl, Button } = BS;
const _ = require('lodash')


class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this);
    this.handleInputChange=this.handleInputChange.bind(this);
  }

  handleInputChange(ev) {
    var nextState = _.cloneDeep(this.state);
    nextState[ev.target.name] = ev.target.value;
    this.setState(nextState);
  }

  handleOnSubmit(e) {
    console.log('inside handle on sbumit', e);
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

        </form>
       </div>
    )
  }
}

export default LoginForm;
