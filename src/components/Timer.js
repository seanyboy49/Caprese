import React from 'react';
import '../styles/app.css'

class Timer extends React.Component {
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
    this.onFive = this.onFive.bind(this);
    this.onTen = this.onTen.bind(this);
    this.onFifteen = this.onFifteen.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.onTick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onFifteen() {
    this.setState({
      timeRemaining: 900000
    })
  }

  onTen() {
    console.log(this)
    this.setState({
      timeRemaining: 600000
    })
  }

  onFive() {
    this.setState({
      timeRemaining: 300000
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
    const actualSeconds = seconds % 60
    const minutes = Math.floor(seconds / 60)

    return (
      <div>
        <h2>Caprese</h2>
        { this.state.running ?
          <div onClick={this.onStop} className="timer timer-running">
            <div className="stopwatch-time"><h1 className="seconds">{minutes}</h1>minutes</div>
            <div className="stopwatch-time"><h1 className="seconds">{actualSeconds}</h1>seconds</div>

          </div>
          :
          <div onClick={this.onStart} className="timer timer-stopped">
            <div className="stopwatch-time"><h1 className="minutes">{minutes}</h1>M</div>
            <br></br>
            <div className="stopwatch-time"><h1 className="seconds">{actualSeconds}</h1>S</div>

          </div>
        }
        <button onClick={this.onReset}>Reset</button>
        <button onClick={this.onFifteen}>15</button>
        <button onClick={this.onTen}>10</button>
        <button onClick={this.onFive}>5</button>

      </div>
    );
  }
};

export default Timer;
