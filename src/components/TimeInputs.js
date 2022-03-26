import React from 'react';

class TimerInputs extends React.Component {
  render() {
    const { handleinputChange } = this.props;
    return (
      <div className="time-input">
      <input
        type="number"
        name="hours"
        onChange={(event) => handleinputChange(event)}
        placeholder="hours"
        data-testid="time-input"
      />
      <input
        type="number"
        name="minutes"
        onChange={(event) => handleinputChange(event)}
        placeholder="minutes"
        data-testid="time-input"
      />
      <input
        type="number"
        name="seconds"
        onChange={(event) => handleinputChange(event)}
        placeholder="seconds"
        data-testid="time-input"
      />
    </div>
    )
  }
}

export default TimerInputs;