import React from 'react';
import '../styles/Pomodoro.css'

import LoginForm from './Login-Form';
import SignoutForm from './Signout-Form';

class Pomodoro extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      running: false,
      timeRemaining: 1500000,
      previousTime: 0
    }

    this.onTick = this.onTick.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onReset = this.onReset.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  componentDidMount() {
    console.log('this.props', this.props);
    this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleTimeChange(e) {
    const minutes = e.target.innerHTML
    const milliseconds = minutes * 60000
    this.setState({
      timeRemaining: milliseconds
    })
  }

  onTick() {
    if (this.state.running && this.state.timeRemaining > 500) {
      const now = Date.now();
      this.setState({
        previousTime: now,
        timeRemaining: this.state.timeRemaining - (now - this.state.previousTime),
      });
    }
    console.log('onTick');
  }

  onStart() {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  }

  onStop() {
    this.setState({ running: false });
  }

  onReset() {
    this.setState({
      running: false,
      timeRemaining: 1500000,
      previousTime: Date.now()
    });
  }

  render() {
    const seconds = Math.floor(this.state.timeRemaining / 1000);
    let actualSeconds = seconds % 60
    let minutes = Math.floor(seconds / 60)

    function formatMinutes() {
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
    }
    function formatSeconds() {
      if (actualSeconds < 10) {
        actualSeconds = `0${actualSeconds}`
      }
    }
    formatSeconds();
    formatMinutes();

    return (
      <div>
        <div className="pomodoro">

          <h1 className="header">Caprese</h1>
          { this.state.running ?
            <div onClick={this.onStop} className="timer timer-running">
              <div className="stopwatch-time"><h1>{minutes}:{actualSeconds}</h1></div>
            </div>
            :
            <div onClick={this.onStart} className="timer timer-stopped">
              <div className="stopwatch-time"><h1>{minutes}:{actualSeconds}</h1></div>
            </div>
          }

          <div className="time-options">
            <button onClick={this.onReset}>Reset</button>
            <button onClick={this.handleTimeChange}>5</button>
            <button onClick={this.handleTimeChange}>10</button>
            <button onClick={this.handleTimeChange}>15</button>
          </div>
        </div>
        <LoginForm />
        <SignoutForm />
      </div>
    );
  }
};

Pomodoro.defaultProps = {
  user: {}
}

export default Pomodoro;
