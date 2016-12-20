var React = require('react');


var Timer = React.createClass({
  getInitialState: function() {
    return {
      running: false,
      timeRemaining: 1500000,
      previousTime: 0,
    }
  },

  componentDidMount: function() {
    this.interval = setInterval(this.onTick, 100);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  onFifteen: function() {
    this.setState({
      timeRemaining: 900000
    })
  },
  onTen: function() {
    this.setState({
      timeRemaining: 600000
    })
  },
  onFive: function() {
    this.setState({
      timeRemaining: 300000
    })
  },
  onTick: function() {
    if (this.state.running && this.state.timeRemaining > 500) {
      const now = Date.now();
      this.setState({
        previousTime: now,
        timeRemaining: this.state.timeRemaining - (now - this.state.previousTime),
      });
    }
    console.log('onTick');
  },

  onStart: function() {
    this.setState({
      running: true,
      previousTime: Date.now(),
    });
  },

  onStop: function() {
    this.setState({ running: false });
  },

  onReset: function() {
    this.setState({
      running: false,
      timeRemaining: this.state.timeRemaining,
      previousTime: Date.now()
    });
  },

  render: function() {
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
});
module.exports = Timer
