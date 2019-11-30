import React, { useState, useEffect } from "react";
import { TextBoard } from "./textBoard";

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

const ScoreBoard = ({
  animations,
  info,
  colors,
  selectTeam,
  width,
  height
}) => {

  const parseAnimation = animations => {
    let arr = [];
    for (let ani in animations) {
      arr.push({ action: ani, delay: animations[ani] });
    }
    return arr;
  };
  const actions = parseAnimation(animations);
  const [showTeamStat, setShowTeamStat] = useState(false);

  useEffect(() => {    
    setTimeout(() => {      
      setShowTeamStat(true);
    }, actions[0] ? actions[0].delay + (450 + 350 + 100 + 250) * spd : (450 + 350 + 100 + 250) * spd);

    return () => {

    }
  }, [showTeamStat, actions]);

  return (
    <svg width={width} height={height}>      
      <TextBoard
        id="team-left-abbr"
        section="main"
        actions={actions.length > 0 ? "appear" : "disappear"}
        info={{ text: info.team1.abbr }}
        colors={{ rect: colors.team1.rect, text: colors.team1.text }}
        timeline={{
          appear: {
            rect: { delay: actions[0] ? actions[0].delay + 150 * spd :  150 * spd, duration: 200 * spd },
            text: { delay: actions[0] ? actions[0].delay + 200 * spd : 200 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: showTeamStat ? 700 * spd : 450 * spd, duration: 200 * spd },
            text: { delay: showTeamStat ? 700 * spd : 400 * spd, duration: 350 * spd }
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={0}
        expandDir="left"
      />
      <TextBoard
        id="team-right-abbr"
        section="main"
        actions={actions.length > 0 ? "appear" : "disappear"}
        info={{ text: info.team2.abbr }}
        colors={{ rect: colors.team2.rect, text: colors.team2.text }}
        timeline={{
          appear: {
            rect: { delay: actions[0] ? actions[0].delay + 150 * spd : 150 * spd, duration: 200 * spd },
            text: { delay: actions[0] ? actions[0].delay + 200 * spd : 200 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: showTeamStat ? 700 * spd : 450 * spd, duration: 200 * spd },
            text: { delay: showTeamStat ? 700 * spd : 400 * spd, duration: 350 * spd }
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={W.default * 2}
        expandDir="right"
      />
      <TextBoard
        id="vs-score-mask"
        section="main"
        actions={actions.length > 0 ? "appear" : "disappear"}
        info={{ text: "" }}
        colors={{ rect: colors.mask, text: "#fefefd" }}
        timeline={{
          appear: {
            rect: { delay: actions[0] ? actions[0].delay + 150 * spd :  150 * spd, duration: 200 * spd },
            text: { delay: actions[0] ? actions[0].delay + 200 * spd :  200 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: showTeamStat ? 800 * spd : 650 * spd, duration: 200 * spd },
            text: { delay: showTeamStat ? 800 * spd : 600 * spd, duration: 350 * spd }
          }
        }}
        rectWidth={W.mask}
        rectHeight={height}
        transX={W.default - (W.mask - W.default) / 2}
        expandDir="center"
      />
      <TextBoard
        id="vs-score"
        section="main"
        actions={actions.length > 0 ? "appear" : "disappear"}
        info={{ text: info.score }}
        colors={{ rect: colors.score_rect, text: colors.score }}
        timeline={{
          appear: {
            rect: { delay: actions[0] ? actions[0].delay + 0 * spd : 0 * spd, duration: 200 * spd },
            text: { delay: actions[0] ? actions[0].delay + 100 * spd : 100 * spd, duration: 250 * spd }
          },
          disappear: {
            rect: { delay: showTeamStat ? 800 * spd : 600 * spd, duration: 200 * spd },
            text: { delay: showTeamStat ? 800 * spd : 600 * spd, duration: 250 * spd }
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={W.default}
        expandDir="center"
      />
      <TextBoard
        id="time"
        section="main"
        actions={actions.length > 0 && !showTeamStat ? "appear" : "disappear"}
        info={{ text: info.time }}
        colors={{ rect: colors.time_rect, text: colors.time }}
        timeline={{
          appear: {
            rect: { delay: actions[0] ? actions[0].delay + 450 * spd : 450 * spd, duration: 200 * spd },
            text: { delay: actions[0] ? actions[0].delay + 450 * spd: 450 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: 0 * spd, duration: 200 * spd },
            text: { delay: 100 * spd, duration: 250 * spd }
          }
        }}
        rectWidth={W.time}
        rectHeight={height}
        transX={W.default * 3}
        expandDir="right"
      />
      <TextBoard
        id="team-detail"
        section="team-state"
        actions={showTeamStat && actions.length > 1 ? "appear" : "disappear"}
        info={{
          text: selectTeam === 1 ? info.team1.name : info.team2.name,
          image: selectTeam === 1 ? info.team1.logo : info.team2.logo
        }}
        colors={{
          rect: selectTeam === 1 ? colors.team1.rect : colors.team2.rect,
          text: selectTeam === 1 ? colors.team1.text : colors.team2.text,
          line: colors.spliter
        }}
        timeline={{
          appear: {
            rect: { delay: actions[1] ? actions[1].delay + 350 * spd : 350 * spd, duration: 200 * spd },
            text: { delay: actions[1] ? actions[1].delay + 350 * spd : 350 * spd, duration: 350 * spd },
            image: { delay: actions[1] ? actions[1].delay + 350 * spd : 350 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: 450 * spd, duration: 200 * spd },
            text: { delay: 200 * spd, duration: 350 * spd },
            image: { delay: 200 * spd, duration: 350 * spd }
          }
        }}
        rectWidth={W.team_detail}
        rectHeight={height}
        transX={W.default * 3}
        expandDir="right-with-image"
      />
      <TextBoard
        id="cards"
        section="team-state"
        actions={showTeamStat && actions.length > 1 ? "appear" : "disappear"}
        info={{
          text: `Red cards`,
          text_next: `${
            selectTeam === 1 ? info.team1.card.red : info.team2.card.red
          }`
        }}
        colors={{
          rect: colors.card.rect,
          text: colors.card.desc,
          text_next: colors.card.red
        }}
        timeline={{
          appear: {
            rect: { delay: actions[1] ? actions[1].delay + 450 * spd : 450 * spd, duration: 200 * spd },
            text: { delay: actions[1] ? actions[1].delay + 500 * spd : 500 * spd, duration: 350 * spd },
            text_next: { delay: 500 * spd, duration: 350 * spd }
          },
          disappear: {
            rect: { delay: 150 * spd, duration: 200 * spd },
            text: { delay: 200 * spd, duration: 350 * spd },
            text_next: { delay: 200 * spd, duration: 350 * spd }
          }
        }}
        rectWidth={W.card}
        rectHeight={height}
        transX={W.default * 3 + W.team_detail}
        expandDir="right"
      />
    </svg>
  );
};

export default ScoreBoard;
