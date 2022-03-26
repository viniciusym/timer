import React from 'react';
import PropTypes from 'prop-types'

class Timer extends React.Component {
  render() {
    const { time } = this.props;
    return (
      <h1 className="timer">{ time === "" ? "00:00:00" : time }</h1>
    );
  }
}

Timer.propTypes = {
  time: PropTypes.string.isRequired
}

export default Timer;