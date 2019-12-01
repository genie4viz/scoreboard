import React from "react";
import { Board } from "./Board";

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
  duration,
  animations,
  info,
  colors,
  selectTeam,
  width,
  height
}) => {
  console.log(animations, "animations");  

  let t_score_show_delay,
    t_abbr_show_delay,
    t_time_show_delay,
    t_score_hide_delay,
    t_abbr_hide_delay,
    t_time_hide_delay,
    t_team_show_delay,
    t_card_show_delay,
    t_team_hide_delay,
    t_card_hide_delay,
    main_delay = 0, team_delay = 0;

  if( animations.length === 2){
    main_delay = animations[0].delay;
    team_delay = animations[1].delay;
    // pendingTime = (main_delay + team_delay + 3) * 2 * duration;
  } else if( animations.length === 1) {
    main_delay = animations[0].delay;    
    // pendingTime = (main_delay + 3) * 2 * duration;
  } 
  
  t_score_show_delay = main_delay * duration;
  t_abbr_show_delay = (main_delay + 1) * duration;
  t_time_show_delay = (main_delay + 2) * duration;

  t_score_hide_delay = 2 * duration;
  t_abbr_hide_delay = duration;
  t_time_hide_delay = 0;

  t_team_show_delay =
    (main_delay + team_delay + 2) * duration;
  t_card_show_delay =
    (main_delay + team_delay + 2.5) * duration;

  t_team_hide_delay = duration/2;
  t_card_hide_delay = 0;
  
  return (
    <svg width={width} height={height}>
      <Board
        id="team-left-abbr"
        section="main"
        actions={animations.length > 0 ? "show" : "hide"}
        info={{ text: info.team1.abbr }}
        colors={{ rect: colors.team1.rect, text: colors.team1.text }}
        timeline={{
          show: {
            rect: { delay: t_abbr_show_delay, duration: duration },
            text: { delay: t_abbr_show_delay, duration: duration }
          },
          hide: {
            rect: { delay: t_abbr_hide_delay, duration: duration },
            text: { delay: t_abbr_hide_delay, duration: duration * 0.5}
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={0}
        expandDir="left"
      />
      <Board
        id="team-right-abbr"
        section="main"
        actions={animations.length > 0 ? "show" : "hide"}
        info={{ text: info.team2.abbr }}
        colors={{ rect: colors.team2.rect, text: colors.team2.text }}
        timeline={{
          show: {
            rect: { delay: t_abbr_show_delay, duration: duration },
            text: { delay: t_abbr_show_delay, duration: duration }
          },
          hide: {
            rect: { delay: t_abbr_hide_delay, duration: duration },
            text: { delay: t_abbr_hide_delay, duration: duration * 0.5}
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={W.default * 2}
        expandDir="right"
      />
      <Board
        id="vs-score-mask"
        section="main"
        actions={animations.length > 0 ? "show" : "hide"}
        info={{ text: "" }}
        colors={{ rect: colors.mask, text: "#fefefd" }}
        timeline={{
          show: {
            rect: { delay: t_score_show_delay, duration: duration * 1.5 },
            text: { delay: t_score_show_delay, duration: duration * 1.5 }
          },
          hide: {
            rect: { delay: t_score_hide_delay, duration: duration},
            text: { delay: t_score_hide_delay, duration: duration * 1.5 }
          }
        }}
        rectWidth={W.mask}
        rectHeight={height}
        transX={W.default - (W.mask - W.default) / 2}
        expandDir="center"
      />
      <Board
        id="vs-score"
        section="main"
        actions={animations.length > 0 ? "show" : "hide"}
        info={{ text: info.score }}
        colors={{ rect: colors.score_rect, text: colors.score }}
        timeline={{
          show: {
            rect: { delay: t_score_show_delay, duration: duration },
            text: { delay: t_score_show_delay, duration: duration }
          },
          hide: {
            rect: { delay: t_score_hide_delay, duration: duration },
            text: { delay: t_score_hide_delay, duration: duration * 0.5}
          }
        }}
        rectWidth={W.default}
        rectHeight={height}
        transX={W.default}
        expandDir="center"
      />
      <Board
        id="time"
        section="main"
        actions={animations.length === 1 ? "show" : "hide"}
        info={{ text: info.time }}
        colors={{ rect: colors.time_rect, text: colors.time }}
        timeline={{
          show: {
            rect: { delay: t_time_show_delay, duration: duration },
            text: { delay: t_time_show_delay * 1.2, duration: duration }
          },
          hide: {
            rect: { delay: t_time_hide_delay, duration: duration },
            text: { delay: t_time_hide_delay, duration: duration * 0.5 }
          }
        }}
        rectWidth={W.time}
        rectHeight={height}
        transX={W.default * 3}
        expandDir="right"
      />
      <Board
        id="team-detail"
        section="team-state"
        actions={animations.length > 1 ? "show" : "hide"}
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
          show: {
            rect: { delay: t_team_show_delay, duration: duration },
            text: { delay: t_team_show_delay * 1.2, duration: duration},
            image: { delay: t_team_show_delay * 1.2, duration: duration}
          },
          hide: {
            rect: { delay: t_team_hide_delay, duration: duration },
            text: { delay: t_team_hide_delay, duration: duration * 0.5},
            image: { delay: t_team_hide_delay, duration: duration * 0.5 }
          }
        }}
        rectWidth={W.team_detail}
        rectHeight={height}
        transX={W.default * 3}
        expandDir="right-with-image"
      />
      <Board
        id="cards"
        section="team-state"
        actions={animations.length > 1 ? "show" : "hide"}
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
          show: {
            rect: { delay: t_card_show_delay, duration: duration },
            text: { delay: t_card_show_delay * 1.2, duration: duration },
            text_next: { delay: t_card_show_delay * 1.2, duration: duration }
          },
          hide: {
            rect: { delay: t_card_hide_delay, duration: duration },
            text: { delay: t_card_hide_delay, duration: duration * 0.5},
            text_next: { delay: t_card_hide_delay, duration: duration * 0.5}
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
