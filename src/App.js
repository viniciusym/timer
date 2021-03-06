import React from 'react';
import Timer from './components/Timer';
import './App.css';
import TimerInputs from './components/TimeInputs';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formatedTime: '',
      time: 0,
      timerInput: '',
      minutes: '',
      seconds: '',
      hours: '',
    }
  }

  decreaseTime = () => this.setState((prevState) => ({time: prevState.time - 1}))
  setFormatedTime = () => this.setState({
    formatedTime: this.formatTime(this.state.time)
  })

  timer = (sec) => {
    const secondsInMs = sec * 1000;
    this.setState({
      time: sec,
      formatedTime: this.formatTime(sec),
    })
    let interval = setInterval(() => {
      this.decreaseTime()
      this.setFormatedTime()
    }, 1000);
    this.setState({
      intervalId: interval,
    })
    setTimeout(() => clearInterval(interval), secondsInMs)
  }
  
  formatTime = (sec) => {
    const hours = Math.floor(sec / 3600)
    const minutes = Math.floor((sec / 60) % 60);
    const seconds = Math.floor(sec % 60);

    const formatedTime = `${hours >= 10 ? hours : `0${hours}`}:${minutes >= 10 ? minutes : `0${minutes}`}:${seconds >= 10 ? seconds : `0${seconds}`}`;
    
    return formatedTime;
  }

  handleinputChange = (event) => {
    const { target: {value, name} } = event;
    this.setState({
      [name]: value,
    });
  }

  startTimer = (hours, min, sec) => {
    const { intervalId } = this.state;
    clearInterval(intervalId);
    let totalTimerInSec = (Number(hours) * 3600) + (Number(min) * 60) + Number(sec);
    this.timer(totalTimerInSec)
  }

  resumeTimer = (sec) => {
    this.timer(sec);
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  render() {
    const { time, formatedTime, minutes, seconds, hours, intervalId } = this.state;
    return (
      <div className="main">
        <Timer time={ formatedTime } />
        <TimerInputs handleinputChange={ this.handleinputChange } />
      <div className="time-controls">
        <button onClick={() => this.startTimer(hours, minutes, seconds)}>Start</button>
        <button onClick={() => clearInterval(intervalId)}>Pause</button>
        <button onClick={() => this.resumeTimer(time)}>Resume</button>
      </div>
      </div>
    );
  }
}

export default App;
