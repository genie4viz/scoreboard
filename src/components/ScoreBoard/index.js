import React from "react";
import {TextBoard} from "./textBoard";

import team_l_logo from "../../assets/logos/teaml.png";
import team_r_logo from "../../assets/logos/teamr.png";

const spd = 3;

const W = {
  default: 140,
  mask: 170,
  time: 160,
  logo: 90,
  logo_img: 50,
  team_detail: 410,  
  card: 300
};

const ScoreBoard = ({ animations, info, colors, width, height }) => (
  <svg width={width} height={height}>
    <TextBoard
      id="team-left-abbr"
      section="main"
      animations={animations}
      info={{ text: "KC" }}
      colors={{ rect: "#d32119", text: "#fefefd" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.default}
      rectHeight={height}
      transX={0}
      expandDir="left"
    />
    <TextBoard
      id="team-right-abbr"
      section="main"
      animations={animations}
      info={{ text: "GC" }}
      colors={{ rect: "#fefefd", text: "#11432f" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.default}
      rectHeight={height}
      transX={W.default * 2}
      expandDir="right"
    />
    <TextBoard
      id="vs-score-mask"
      section="main"
      animations={animations}
      info={{ text: "" }}
      colors={{ rect: "rgba(0, 0, 0, 0.15)", text: "#fefefd" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.mask}
      rectHeight={height}
      transX={W.default - (W.mask - W.default)/2}
      expandDir="center"
    />
    <TextBoard
      id="vs-score"
      section="main"
      animations={animations}
      info={{ text: "0 - 4" }}
      colors={{ rect: "#001236", text: "#fefefd" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.default}
      rectHeight={height}
      transX={W.default}
      expandDir="center"
    />
    {/* <TextBoard
      id="time"
      section="main"
      animations={animations}
      info={{ text: "90:00" }}
      colors={{ rect: "#001236", text: "#fefefd" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.time}
      rectHeight={height}
      transX={W.default * 3}
      expandDir="right"
    /> */}
    <TextBoard
      id="team-detail"
      section="team-state"
      animations={animations}
      info={{ text: "Kingston City", image: team_l_logo}}
      colors={{ rect: "#d32119", text: "#fefefd", line: "#fefefd" }}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd },
        image: { delay: 200 * spd, duration: 350 * spd },
      }}
      rectWidth={W.team_detail}
      rectHeight={height}
      transX={W.default * 3}
      expandDir="right-with-image"
    />
    <TextBoard
      id="cards"
      section="team-state"
      animations={animations}
      info={{ text: "Red cards", text_next: "0"}}
      colors={{ rect: "#001236", text: "#9ed0d8", text_next: "#fefefd"}}
      timeline={{
        rect: { delay: 150 * spd, duration: 200 * spd },
        text: { delay: 200 * spd, duration: 350 * spd },
        text_next: { delay: 200 * spd, duration: 350 * spd }
      }}
      rectWidth={W.card}
      rectHeight={height}
      transX={W.default * 3 + W.team_detail}
      expandDir="right"
    />
  </svg>
);

export default ScoreBoard;
