import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Clock.css";
import "../../App.css";


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
    // <>
    //   <div className="clock-container">
    //     <h1 className="clock-text-box">
    //       {("0" + minutes).toString().split("").slice(-2).join("")}:
    //       {("0" + seconds).toString().split("").slice(-2).join("")}.
    //       {("0" + millisecond).toString().split("").slice(-2).join("")}
    //     </h1>
    //     <div className="clockScreenContainer">
    //       {stopwatchStarted ? (
    //         <button onClick={recordLap} className="lapAndResetButton">
    //           Lap
    //         </button>
    //       ) : (
    //         <button onClick={resetStopwatch} className="lapAndResetButton">
    //           Reset
    //         </button>
    //       )}
    //       {stopwatchStarted ? (
    //         <button onClick={stopStopwatch} className="stopButton">
    //           stop
    //         </button>
    //       ) : (
    //         <button onClick={startStopwatch} className="startButton">
    //           start
    //         </button>
    //       )}
    //     </div>
    //     <div className="laps-info-section">
    //       <br />
    //       {value
    //         .slice(0)
    //         .reverse()
    //         .map((tt, i) => (
    //           <div className="laps-and-time-container" key={i + 1}>
    //             <div className="laps-and-time-info">
    //               <p>Lap {value.length - i}</p>
    //               <p className="time">{tt}</p>
    //             </div>
    //             <hr className="hr" />
    //           </div>
    //         ))}
    //     </div>
    //     <div className="bottom-tab">
    //       <Link to="/clock/stopwatch">
    //         <button className="mode-selected">Stopwatch</button>
    //       </Link>
    //       <Link to="/clock/timer">
    //         <button>Timer</button>
    //       </Link>
    //     </div>
    //   </div>
    // </>
    <>
      <div className="row col-10 col-sm-7 col-md-5 col-lg-4 col-xl-3 px-2 mx-auto calculator-container-1">
        <h1 className="d-flex align-self-center align-items-center justify-content-center h-80px">
          {("0" + minutes).toString().split("").slice(-2).join("")}:
          {("0" + seconds).toString().split("").slice(-2).join("")}.
          {("0" + millisecond).toString().split("").slice(-2).join("")}
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          {stopwatchStarted ? (
            <button onClick={recordLap} className="lapAndResetButton w-30 mx-3">
              Lap
            </button>
          ) : (
            <button onClick={resetStopwatch} className="lapAndResetButton w-30 mx-3">
              Reset
            </button>
          )}
          {stopwatchStarted ? (
            <button onClick={stopStopwatch} className="stopButton w-30 mx-3">
              stop
            </button>
          ) : (
            <button onClick={startStopwatch} className="startButton w-30 mx-3">
              start
            </button>
          )}
        </div>
        <div className="d-flex row align-content-start mx-auto mt-2 mb-1 h-385px overflow-scroll">
          <br />
          {value
            .slice(0)
            .reverse()
            .map((tt, i) => (
              <div className="w-100 align-items-start" key={i + 1}>
                <div className="laps-and-time-info justify-content-between">
                  <p>Lap {value.length - i}</p>
                  <p className="time">{tt}</p>
                </div>
                <hr className="hr" />
              </div>
            ))}
        </div>
        <div className="d-flex col-12 justify-content-center mx-auto">
          <Link to="/clock/stopwatch">
            <button className="mode-selected mx-3">Stopwatch</button>
          </Link>
          <Link to="/clock/timer">
            <button className="timer-button mx-3">Timer</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
