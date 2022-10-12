import { useState, useEffect, useRef } from "react";
import { DropdownButton, Dropdown, Item } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Clock.css";

const Timer = () => {
  /////////////////////////////////////////////////////////////////////////

  const [timerStarted, setTimerStarted] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hourSelected, setHourSelected] = useState();
  const [minuteSelected, setMinuteSelected] = useState();
  const [secondSelected, setSecondSelected] = useState();
  const [timerEndsResponse, setTimerEndsResponse] = useState();

  const secondRef = useRef(null);

  /////////////////////////////////////////////////////////////////////////

  // Keeping the code DRY by not typing every hour/minute/second
  const range = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
  };
  let hours = range(0, 23);
  let minutes = range(0, 59);
  let seconds = range(0, 59);

  /////////////////////////////////////////////////////////////////////////

  // Set Values (selected by User) for Timer
  const setHour = (e) => {
    setHourSelected(Number(e.target.innerHTML));
  };

  const setMinute = (e) => {
    setMinuteSelected(Number(e.target.innerHTML));
  };

  const setSecond = (e) => {
    setSecondSelected(Number(e.target.innerHTML));
  };

  /////////////////////////////////////////////////////////////////////////

  // START TIMER
  const startTimer = () => {
    if (hourSelected >= 0 && minuteSelected >= 0 && secondSelected >= 0) {
      setTimerStarted(true);
      // DECREASE SECONDS
      secondRef.current = setInterval(() => {
        setSecondSelected((seconds) => seconds - 1);
      }, 1000);
    }
    setPaused(false);
  };

  /////////////////////////////////////////////////////////////////////////

  // DECREASE MINUTES
  if (secondSelected === 0 && minuteSelected !== 0) {
    setMinuteSelected(minuteSelected - 1);
    setSecondSelected(60);
  }

  /////////////////////////////////////////////////////////////////////////

  // DECREASE HOURS
  if (minuteSelected === 0 && hourSelected !== 0) {
    setHourSelected(hourSelected - 1);
    setMinuteSelected(59);
  }

  /////////////////////////////////////////////////////////////////////////

  // PAUSE TIMER
  const pauseTimer = () => {
    setTimerStarted(false);
    setPaused(true);
    clearInterval(secondRef.current);
  };

  /////////////////////////////////////////////////////////////////////////

  // CANCEL TIMER
  const cancelTimer = () => {
    setTimerStarted(false);
    setPaused(false);
    setHourSelected();
    setMinuteSelected();
    setSecondSelected();
    clearInterval(secondRef.current);
  };

  /////////////////////////////////////////////////////////////////////////

  // END OF TIMER
  if (hourSelected === 0 && minuteSelected === 0 && secondSelected === 0) {
    clearInterval(secondRef.current);
    // setTimerStarted(false);
    setPaused(false);
    setHourSelected(0);
    setMinuteSelected(0);
    setSecondSelected(1);

    alert("timer has ended");
  }

  const endTimer = () => {};

  return (
    <>
      {/* <div className="clock-container">
        <div className="timer-text-box">
          {!timerStarted & !paused ? (
            <div>
              <select size="2" name="hours" className="hours-dropdown">
                {hours.map((hour) => (
                  <option onClick={(e) => setHour(e)} key={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              :
              <select size="2" name="minutes" className="minutes-dropdown">
                {minutes.map((minute) => (
                  <option onClick={(e) => setMinute(e)} key={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              :
              <select size="2" name="seconds" className="seconds-dropdown">
                {seconds.map((second) => (
                  <option onClick={(e) => setSecond(e)} key={second}>
                    {second}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="count-down-timer-div">
              <h2>
                {("0" + hourSelected).split("").slice(-2).join("")}:
                {("0" + minuteSelected).split("").slice(-2).join("")}:
                {("0" + secondSelected).split("").slice(-2).join("")}
              </h2>
            </div>
          )}
        </div>
        <div className="clockScreenContainer">
          <button onClick={cancelTimer}>Cancel</button>
          {!timerStarted && (
            <button onClick={startTimer} className="startButton">
              Start
            </button>
            // ) : (
            //   <button onClick={startTimer} className="startButton">
            //     Start
            //   </button>
          )}
          {timerStarted && (
            <button onClick={pauseTimer} className="pauseButton">
              Pause
            </button>
          )}
        </div>
        <div className="timer-ends-section">
          <h2>When Timer Ends</h2>
          <select>
            <option>Alert</option>
          </select>
        </div>
        <div className="bottom-tab">
          <Link to="/clock/stopwatch">
            <button>Stopwatch</button>
          </Link>
          <Link to="/clock/timer">
            <button className="mode-selected">Timer</button>
          </Link>
        </div>
      </div> */}
      <div className="row col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 px-2 mx-auto calculator-container-1">
        <div className="d-flex align-self-center justify-content-center h-80px">
          {!timerStarted & !paused ? (
            <div className="d-flex col-12 align-self-center justify-content-center">
              <select size="2" name="hours" className="hours-dropdown timer-input-section align-self-center">
                {hours.map((hour) => (
                  <option onClick={(e) => setHour(e)} key={hour}>
                    {hour}
                  </option>
                ))}
              </select>
              <span className="colon">:</span>
              <select size="2" name="minutes" className="minutes-dropdown timer-input-section align-self-center">
                {minutes.map((minute) => (
                  <option onClick={(e) => setMinute(e)} key={minute}>
                    {minute}
                  </option>
                ))}
              </select>
              <span className="colon">:</span>
              <select size="2" name="seconds" className="seconds-dropdown timer-input-section align-self-center">
                {seconds.map((second) => (
                  <option onClick={(e) => setSecond(e)} key={second}>
                    {second}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="count-down-timer-div justify-content-center mx-auto">
              <h2>
                {("0" + hourSelected).split("").slice(-2).join("")}:
                {("0" + minuteSelected).split("").slice(-2).join("")}:
                {("0" + secondSelected).split("").slice(-2).join("")}
              </h2>
            </div>
          )}
        </div>
        <div className="d-flex col-12 justify-content-center h-100px mt-5 start-cancel-buttons">
          <button onClick={cancelTimer} class="stopButton w-30 mx-3">Cancel</button>
          {!timerStarted && (
            <button onClick={startTimer} className="startButton w-30 mx-3">
              Start
            </button>
          )}
          {timerStarted && (
            <button onClick={pauseTimer} className="pauseButton w-30 mx-3">
              Pause
            </button>
          )}
        </div>
        <div className="col-12 d-flex align-items-center">
          <h2 className="row mx-auto">When Timer Ends</h2>
          <select className="row mx-auto">
            <option>Alert</option>
          </select>
        </div>
        <div className="d-flex col-12 justify-content-center mt-auto mb-2 mx-auto">
          <Link to="/clock/stopwatch">
            <button className="timer-button mx-3">Stopwatch</button>
          </Link>
          <Link to="/clock/timer">
            <button className="mode-selected mx-3">Timer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Timer;
