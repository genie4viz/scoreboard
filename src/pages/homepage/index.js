import React, { useState, useRef } from "react";
import ScoreBoard from "../../components/ScoreBoard";

import team1_logo from "../../assets/logos/teaml.png";
import team2_logo from "../../assets/logos/teamr.png";

function App() {
  const mainDelayRef = useRef();
  const teamDelayRef = useRef();

  const [anims, setAnims] = useState(null);
  
  const showBoard = () => {    
    
    setAnims({
      main: parseInt(mainDelayRef.current.value) * 1000,
      teamStat: parseInt(teamDelayRef.current.value) * 1000
    });
  };

  const hideBoard = () => {    
    setAnims([]); //hidden
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
      <label htmlFor="main-delay" style={{ color: "white" }}>
        Main delay(seconds)
      </label>
      <input id="main-delay" ref={mainDelayRef} defaultValue="2" />
      <br />
      <label htmlFor="team-delay" style={{ color: "white" }}>
        TeamStat delay(seconds)
      </label>
      <input id="team-delay" ref={teamDelayRef} defaultValue="1" />
      <br />
      <button onClick={showBoard}>Show</button>
      <button onClick={hideBoard}>Hidden</button>
      <br />
      {anims && (
        <ScoreBoard          
          animations={anims}
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
