import React, { useState, useEffect } from "react";

function CallManager() {
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStartTime, setCallStartTime] = useState(null);
  const [callEndTime, setCallEndTime] = useState(null);

  const startCall = () => {
    setIsCallActive(true);
    setCallStartTime(new Date());
  };

  const endCall = () => {
    setIsCallActive(false);
    setCallEndTime(new Date());
  };

  const resetCall = () => {
    setIsCallActive(false);
    setCallStartTime(null);
    setCallEndTime(null);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(
      (time.getTime() - callStartTime.getTime()) / 1000
    );
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  useEffect(() => {
    let timer;
    if (isCallActive) {
      timer = setInterval(() => {
        // This function updates the timer every second
        // The timer is calculated based on the call start time
        console.log("Call Duration:", formatTime(new Date()));
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isCallActive, callStartTime]);

  return (
    <div>
      <button onClick={isCallActive ? endCall : startCall}>
        {isCallActive ? "End Call" : "Call Now"}
      </button>
      {isCallActive && (
        <div>
          <p>Call Duration: {formatTime(new Date())}</p>
        </div>
      )}
      {!isCallActive && callStartTime && callEndTime && (
        <div>
          <p>Call Ended. Total Duration: {formatTime(callEndTime)}</p>
          <button onClick={resetCall}>Start New Call</button>
        </div>
      )}
    </div>
  );
}

export default CallManager;
