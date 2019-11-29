import React, { useEffect, useRef } from "react";
import {TextBoard} from "./textBoard";

const spd = 1;

const W = {
  default: 140,
  logo: 90,
  name: 310,
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
  </svg>
);

export default ScoreBoard;
