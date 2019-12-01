import React, { useState, useRef } from "react";
import ScoreBoard from "../../components/ScoreBoard";

import team1_logo from "../../assets/logos/teaml.png";
import team2_logo from "../../assets/logos/teamr.png";

function App() {
  const [animations, setAnimations] = useState(null);
  const [pending, setPending] = useState(false);
  const prevValueRef = useRef();
  const main_delay = 0,
    team_delay = 0;

  const duration = 500;
  
  const changeStatus = value => {
    setPending(value);
    if (prevValueRef.current === 2) {
      setAnimations([
        { animation: "main", delay: main_delay },
        { animation: "teamStat", delay: team_delay }
      ]);
      setPending(true);
      setTimeout(() => {
        changeStatus(false);
      }, (main_delay + team_delay + 4) * duration);
    } else if (prevValueRef.current === 1) {
      setAnimations([{ animation: "main", delay: main_delay }]);
      setPending(true);
      setTimeout(() => {
        changeStatus(false);
      }, (4 + main_delay + team_delay) * duration);
    } else {
      setAnimations([]);
      setPending(true);
      setTimeout(() => {
        changeStatus(false);
      }, (4 + main_delay + team_delay) * duration);
    }
  };
  const btnClick = value => {
    if (pending) {
      prevValueRef.current = value;
      return;
    }
    if (!prevValueRef.current) {
      prevValueRef.current = value;
    }
    changeStatus(true);
  };

  return (
    <div
      style={{
        width: "100wh",
        minHeight: "100vh",
        padding: 32,
        backgroundColor: "#333"
      }}
    >
      <button onClick={() => btnClick(2)}>Main + TeamState</button>
      <button onClick={() => btnClick(1)}>Main</button>
      <button onClick={() => btnClick(0)}>Hide</button>
      <br />
      {animations && (
        <ScoreBoard
          duration={duration}
          animations={animations}
          selectTeam={1}
          info={{
            score: "0 - 4",
            time: "90:00",
            team1: {
              abbr: "KC",
              name: "Kingston City",
              logo: team1_logo,
              card: {
                red: 0,
                yellow: 0
              }
            },
            team2: {
              abbr: "GC",
              name: "Gublin City",
              logo: team2_logo,
              card: {
                red: 1,
                yellow: 2
              }
            }
          }}
          colors={{
            mask: "rgba(0, 0, 0, 0.15)",
            score: "#fefefd",
            score_rect: "#001236",
            time: "#fefefd",
            time_rect: "#001236",
            spliter: "#fefefd",
            team1: {
              text: "#fefefd",
              rect: "#d32119"
            },
            team2: {
              text: "#11432f",
              rect: "#fefefd"
            },
            card: {
              rect: "#001236",
              desc: "#9ed0d8",
              red: "#9ed0d8",
              yellow: "#9ed0d8"
            }
          }}
          width={1130}
          height={70}
        />
      )}
    </div>
  );
}

export default App;
