import React from 'react';

class Timer extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <h1 className="timer">{ time }</h1>
    );
  }
}

export default Timer;