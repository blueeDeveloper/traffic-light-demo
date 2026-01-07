import "./App.css";
import { useState, useEffect, useRef } from "react";

const App = () => {
  const sequence = ["red", "green", "orange"];
  const visualOrder = ["red", "orange", "green"];
  const [currentLightActive, setCurrentLightActive] = useState("red");
  const [autoMode, setAutoMode] = useState(false);

  const timerRef = useRef(null);

  const timeSequence = {
    red: 3000,
    orange: 1000,
    green: 5000,
  };

  const handleActivateLight = (currLight) => {
    setCurrentLightActive(currLight);
    setAutoMode(false);
  };

  useEffect(() => {
    const changeLight = () => {
      setCurrentLightActive((prev) => {
        const currentIndex = sequence.indexOf(prev);
        const nextIndex = (currentIndex + 1) % sequence.length;
        return sequence[nextIndex];
      });
    };
    if (autoMode) {
      timerRef.current = setTimeout(
        changeLight,
        timeSequence[currentLightActive]
      );
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoMode, currentLightActive]);
  const handleAutoMode = () => {
    setAutoMode((prev) => !prev);
  };

  return (
    <>
      <div className="container">
        <div className="trafficLightsContainer">
          {visualOrder.map((currLight) => {
            return (
              <div
                className="lightsDiv"
                style={{
                  backgroundColor:
                    currentLightActive === currLight
                      ? currentLightActive
                      : "lightgrey",
                }}
                onClick={() => handleActivateLight(currLight)}
              ></div>
            );
          })}
        </div>
      </div>
      <div>
        <button type="button" className="autoButton" onClick={handleAutoMode}>
          Auto Mode {autoMode ? " ON" : " OFF"}
        </button>
      </div>
    </>
  );
};

export default App;
