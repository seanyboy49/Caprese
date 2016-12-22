import React from 'react';
import { Link } from 'react-router'

class Navigation extends React.Component{
  render() {
    return(
      <div>
        <h1>Muhhfucking Nav Bar!</h1>
        <ul role="nav">
          <li><Link to="/pomodoro">Pomodoro</Link></li>
          <li><Link to="/tags">Tags</Link></li>
          <li><Link to="/log">Logs</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default Navigation
