import React from 'react';
import Timer from './components/Timer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      timerInput: '',
    }
  }

  countdown = (sec) => {
    const secondsInMs = sec * 1000;
    let interval = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time - 1
      }))
    }, 1000);
    setTimeout(() => clearInterval(interval), secondsInMs)
  }

  handleinputChange = (event) => {
    const { target: {value, name} } = event;
    this.setState({
      [name]: value,
    });
  }

  startTimer = (sec) => {
    this.setState({
      time: sec,
    }, this.countdown(sec))
  }

  render() {
    const { time, timerInput } = this.state;
    return (
      <div>
        <Timer time={ time } />
        <input type="text" name="timerInput" onChange={(event) => this.handleinputChange(event)}/>
        <button onClick={() => this.startTimer(timerInput)}>Start</button>
      </div>
    );
  }
}

export default App;
