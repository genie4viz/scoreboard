import React, { useState } from "react";
import ScoreBoard from "../../components/ScoreBoard";

import team_l_logo from "../../assets/logos/teaml.png";
import team_r_logo from "../../assets/logos/teamr.png";

const colors = {
  MASK: '#e0e0df',
  PAN: '#001236',
  TIME: '#fefefd',
  SCORE: '#fefefd',
  TEAM_L: '#d32119',
  TEAM_L_TEXT: '#fefefd',
  TEAM_R: '#fefefd',
  TEAM_R_TEXT: '#11432f',
  CARDS_TEXT: '#9ed0d8'
};

const info = {
  TIME: "90:00",
  TEAM_LEFT: {
    NAME: "Kingston City",
    ABBR: "KC",
    SCORE: 0,
    LOGO: team_l_logo, //team logo img url
    CARDS: {
      RED: 0,
      YELLOW: 1
    }
  },
  TEAM_RIGHT: {
    NAME: "GUILDFORD CITY",
    ABBR: "GC",
    SCORE: 4,
    LOGO: team_r_logo, //team logo img url
    CARDS: {
      RED: 1,
      YELLOW: 0
    }
  }  
};

const WIDTHS = {
  DEFAULT: 140,
  LOGO: 90,
  NAME: 310,
  CARDS: 300
};

function App() {
  const [anims, setAnims] = useState([{}]);

  const ChangeState = () => {
    setAnims([]);
  }
  return (
    <div style={{ width: '100wh', minHeight: "100vh", padding: 32, backgroundColor: '#ddd' }}>
      <button onClick={ChangeState}>Change State</button>
      <ScoreBoard animations={anims} info={info} colors={colors} width={1110} height={70} />
    </div>
  );
}

export default App;
