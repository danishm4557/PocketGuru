import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Clock.css";

const Stopwatch = () => {
  const [stopwatchStarted, setStopwatchStarted] = useState(false);

  const [millisecond, setMillisecond] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const millisecondRef = useRef(null);
  const secondRef = useRef(null);
  const minutesRef = useRef(null);

  const [value, setValue] = useState([]);

  const startStopwatch = () => {
    setStopwatchStarted(true);
    // Milliseconds
    millisecondRef.current = setInterval(() => {
      setMillisecond((millisecond) => millisecond + 1);
    }, 10);

    // Seconds
    secondRef.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);

    // Minutes
    minutesRef.current = setInterval(() => {
      setMinutes((minutes) => minutes + 1);
    }, 60000);
  };

  // Resets seconds value every 60 seconds
  if (seconds === 60) {
    setSeconds(0);
  }

  const stopStopwatch = () => {
    setStopwatchStarted(false);
    clearInterval(millisecondRef.current);
    clearInterval(secondRef.current);
    clearInterval(minutesRef.current);
  };

  const recordLap = () => {
    value.push(
      `${("0" + minutes).toString().split("").slice(-2).join("")}:${("0" + seconds)
        .toString()
        .split("")
        .slice(-2)
        .join("")}.${("0" + millisecond).toString().split("").slice(-2).join("")}`
    );
  };

  const resetStopwatch = () => {
    clearInterval(millisecondRef.current);
    clearInterval(secondRef.current);
    clearInterval(minutesRef.current);
    setMillisecond(0);
    setSeconds(0);
    setMinutes(0);
    setValue([]);
  };

  return (
    <>
      <div className="clock-container">
        <h1 className="clock-text-box">
          {("0" + minutes).toString().split("").slice(-2).join("")}:
          {("0" + seconds).toString().split("").slice(-2).join("")}.
          {("0" + millisecond).toString().split("").slice(-2).join("")}
        </h1>
        <div className="clockScreenContainer">
          {stopwatchStarted ? (
            <button onClick={recordLap} className="lapAndResetButton">
              Lap
            </button>
          ) : (
            <button onClick={resetStopwatch} className="lapAndResetButton">
              Reset
            </button>
          )}
          {stopwatchStarted ? (
            <button onClick={stopStopwatch} className="stopButton">
              stop
            </button>
          ) : (
            <button onClick={startStopwatch} className="startButton">
              start
            </button>
          )}
        </div>
        <div className="laps-info-section">
          <br />
          {value
            .slice(0)
            .reverse()
            .map((tt, i) => (
              <div className="laps-and-time-container" key={i + 1}>
                <div className="laps-and-time-info">
                  <p>Lap {value.length - i}</p>
                  <p className="time">{tt}</p>
                </div>
                <hr className="hr" />
              </div>
            ))}
        </div>
        <div className="bottom-tab">
          <Link to="/clock/stopwatch">
            <button className="mode-selected">Stopwatch</button>
          </Link>
          <Link to="/clock/timer">
            <button>Timer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
