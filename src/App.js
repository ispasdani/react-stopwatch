import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [timeOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timeOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timeOn) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [timeOn]);

  return (
    <div className="App">
      <div className="app-container glowing">
        <div className="content">
          <div>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
          </div>

          <div className="buttons">
            {!timeOn && time === 0 && (
              <button
                className="start-btn-border"
                onClick={() => setTimeOn(true)}
              >
                <a href="#" className="start-btn">
                  START
                </a>
              </button>
            )}
            {timeOn && (
              <button
                className="stop-btn-border"
                onClick={() => setTimeOn(false)}
              >
                <a href="#" className="stop-btn">
                  STOP
                </a>
              </button>
            )}
            {!timeOn && time > 0 && (
              <button className="reset-btn-border" onClick={() => setTime(0)}>
                <a href="#" className="reset-btn">
                  RESET
                </a>
              </button>
            )}
            {!timeOn && time > 0 && (
              <button
                className="resume-btn-border"
                onClick={() => setTimeOn(true)}
              >
                <a href="#" className="resume-btn">
                  RESUME
                </a>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
