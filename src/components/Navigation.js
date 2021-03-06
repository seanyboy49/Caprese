import React from 'react';
import '../styles/Navigation.css'
import { Link } from 'react-router'

class Navigation extends React.Component{
  render() {
    return(
      <div>
        <div className="nav-bar">
            <div className="panel"><Link to="/pomodoro">Pomodoro</Link></div>
            <div className="panel"><Link to="/tags">Tags</Link></div>
            <div className="panel"><Link to="/logs">Logs</Link></div>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Navigation
