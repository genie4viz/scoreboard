import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const WIDTHS = {
  DEFAULT: 140,
  LOGO: 90,
  NAME: 310,
  CARDS: 300
};

const t = 1.5;

const TIMELINE = {
  TEAM_ABBR_RECT: [{
    DELAY: 0,
    DURATION: 150 * t
  }],
  TEAM_ABBR_TEXT: [{
    DELAY: 200 * T,
    DURATION: 250 * t
  },{
    DELAY: 0,
    DURATION: 150 * t
  }]
}


const ScoreBoard = ({ animations, info, colors, width, height }) => {
  const svgRef = useRef();

  const WIDTHS = {
    DEFAULT: 140,
    LOGO: 90,
    NAME: 310,
    TIME: 150,
    CARDS: 300
  };

  useEffect(() => {
    let board = d3.select(svgRef.current).select(".board");

    if (board.empty()) {
      board = d3
        .select(svgRef.current)
        .append("g")
        .attr("class", "board");
    }    

    //main sections...
    let teamLeftPanRect = board.select(".teamLeftPan");
    if (teamLeftPanRect.empty()) {
      teamLeftPanRect = board
        .append("rect")
        .attr("class", "teamLeftPan")
        .attr("x", WIDTHS.DEFAULT)
        .attr("width", 0)
        .attr("height", height)
        .attr("fill", colors.TEAM_L)
        .transition()
        .delay(150 * t)
        .duration(200 * t)
        .attr("x", 0)
        .attr("width", WIDTHS.DEFAULT)
        .attr("height", height);
        
      const scoreTeamLeftText = board
      .append("text")
      .attr("x", WIDTHS.DEFAULT * 0.6)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "central")
      .attr("font-weight", "bold")
      .attr("font-size", 40)
      .attr("fill", colors.TEAM_L_TEXT)
      .text(`${info.TEAM_LEFT.ABBR}`)
      .attr("opacity", 0)
      .transition()
      .delay(200 * t)
      .duration(250 * t)
      .attr("opacity", 1)
      .transition()
      .delay(0)
      .duration(100 * t)
      .attr("x", WIDTHS.DEFAULT * 0.5);
    }

    let teamRightPanRect = board.select(".teamRightPan");
    if (teamRightPanRect.empty()) {
      teamRightPanRect = board
        .append("rect")
        .attr("class", "teamRightPan")
        .attr("x", WIDTHS.DEFAULT * 2)
        .attr("width", 0)
        .attr("height", height)
        .attr("fill", colors.TEAM_R)
        .transition()
        .delay(150 * t)
        .duration(200 * t)
        .attr("width", WIDTHS.DEFAULT)
        .attr("height", height);
    }
    
    // if (animations.length == 0) {
    //   console.log(animations.length)
    //   //hidden
    //   teamLeftPanRect        
    //     .transition()
    //     .duration(300 * t)
    //     .attr("x", WIDTHS.DEFAULT)
    //     .attr("width", 0);
    // }

    

    // const maskPanRect = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 1.5)
    //   .attr("width", 0)
    //   .attr("height", height)
    //   .attr("fill", colors.MASK)
    //   .attr("opacity", 0.4)
    //   .transition()
    //   .delay(0)
    //   .duration(450 * t)
    //   .attr("x", WIDTHS.DEFAULT * 0.85)
    //   .attr("width", WIDTHS.DEFAULT * 1.3)
    //   .attr("height", height);

    // const scorePanRect = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 1.375)
    //   .attr("width", WIDTHS.DEFAULT / 4)
    //   .attr("height", height)
    //   .attr("fill", colors.PAN)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(300 * t)
    //   .attr("x", WIDTHS.DEFAULT)
    //   .attr("width", WIDTHS.DEFAULT);

    // const scoreVSText = board
    //   .append("text")
    //   .attr("x", WIDTHS.DEFAULT * 1.5)
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "800")
    //   .attr("font-size", 36)
    //   .attr("fill", colors.SCORE)
    //   .text(`${info.TEAM_LEFT.SCORE} - ${info.TEAM_RIGHT.SCORE}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(0)
    //   .duration(150 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(200 * t)
    //   .attr("font-size", 48)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("font-size", 44);

    // const scoreTeamLeftText = board
    //   .append("text")
    //   .attr("x", WIDTHS.DEFAULT * 0.6)
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 40)
    //   .attr("fill", colors.TEAM_L_TEXT)
    //   .text(`${info.TEAM_LEFT.ABBR}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(200 * t)
    //   .duration(250 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("x", WIDTHS.DEFAULT * 0.5);

    // const scoreTeamRightText = board
    //   .append("text")
    //   .attr("x", WIDTHS.DEFAULT * 2.4)
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 40)
    //   .attr("fill", colors.TEAM_R_TEXT)
    //   .text(`${info.TEAM_RIGHT.ABBR}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(200 * t)
    //   .duration(250 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("x", WIDTHS.DEFAULT * 2.5);

    // const timePanRect = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 3)
    //   .attr("height", height)
    //   .attr("fill", colors.PAN)
    //   .transition()
    //   .delay(500 * t)
    //   .duration(300 * t)
    //   .attr("width", WIDTHS.DEFAULT);

    // const timeText = board
    //   .append("text")
    //   .attr("x", WIDTHS.DEFAULT * 3.45)
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 40)
    //   .attr("fill", colors.TIME)
    //   .text(`${info.TIME}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(600 * t)
    //   .duration(350 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("x", WIDTHS.DEFAULT * 3.5);

    // //teamStat sections...
    // //disappear timespan
    // timePanRect
    //   .transition()
    //   .remove()
    //   .delay(1000 * t)
    //   .duration(300 * t)
    //   .attr("width", 0);
    // timeText
    //   .transition()
    //   .remove()
    //   .delay(600 * t)
    //   .duration(300 * t)
    //   .attr("opacity", 0);

    // const logoPanRect = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 3)
    //   .attr("width", 0)
    //   .attr("height", height)
    //   .attr("fill", colors.TEAM_L)
    //   .transition()
    //   .delay(2000 * t)
    //   .duration(300 * t)
    //   .attr("width", WIDTHS.LOGO);

    // const logoImg = board
    //   .append("image")
    //   .attr("x", WIDTHS.DEFAULT * 3 + (WIDTHS.LOGO - 50) / 2)
    //   .attr("y", (height - 50) / 2)
    //   .attr("xlink:href", info.TEAM_LEFT.LOGO)
    //   .attr("width", 50)
    //   .attr("height", 50)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(2000 * t)
    //   .duration(300 * t)
    //   .attr("opacity", 1);

    // const namePanRect = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 3 + WIDTHS.LOGO)
    //   .attr("width", 0)
    //   .attr("height", height)
    //   .attr("fill", colors.TEAM_L)
    //   .transition()
    //   .delay(2300 * t)
    //   .duration(300 * t)
    //   .attr("width", WIDTHS.NAME);

    // const namePanSplitLine = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 3 + WIDTHS.LOGO - 1)
    //   .attr("width", 1)
    //   .attr("height", height)
    //   .attr("fill", colors.SCORE)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(2300 * t)
    //   .duration(300 * t)
    //   .attr("opacity", 1);

    // const nameText = board
    //   .append("text")
    //   .attr("x", WIDTHS.DEFAULT * 3 + WIDTHS.LOGO + WIDTHS.NAME * 0.4)
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 38)
    //   .attr("fill", colors.TEAM_L_TEXT)
    //   .text(`${info.TEAM_LEFT.NAME}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(2300 * t)
    //   .duration(350 * t)
    //   .attr("opacity", 1)
    //   .transition()
    //   .delay(0)
    //   .duration(100 * t)
    //   .attr("x", WIDTHS.DEFAULT * 3 + WIDTHS.LOGO + WIDTHS.NAME * 0.5);

    // const cardPan = board
    //   .append("rect")
    //   .attr("x", WIDTHS.DEFAULT * 3 + WIDTHS.LOGO + WIDTHS.NAME)
    //   .attr("width", 0)
    //   .attr("height", height)
    //   .attr("fill", colors.PAN)
    //   .transition()
    //   .delay(2600 * t)
    //   .duration(300 * t)
    //   .attr("width", WIDTHS.CARDS);

    // const cardDescText = board
    //   .append("text")
    //   .attr(
    //     "x",
    //     WIDTHS.DEFAULT * 3 + WIDTHS.LOGO + WIDTHS.NAME + WIDTHS.CARDS * 0.4
    //   )
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 32)
    //   .attr("fill", colors.CARDS_TEXT)
    //   .text(`Red cards:`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(2600 * t)
    //   .duration(550 * t)
    //   .attr("opacity", 1);

    // const cardText = board
    //   .append("text")
    //   .attr(
    //     "x",
    //     WIDTHS.DEFAULT * 3 + WIDTHS.LOGO + WIDTHS.NAME + WIDTHS.CARDS * 0.75
    //   )
    //   .attr("y", height / 2)
    //   .attr("text-anchor", "middle")
    //   .attr("alignment-baseline", "central")
    //   .attr("font-weight", "bold")
    //   .attr("font-size", 40)
    //   .attr("fill", colors.SCORE)
    //   .text(`${info.TEAM_LEFT.CARDS.RED}`)
    //   .attr("opacity", 0)
    //   .transition()
    //   .delay(2600 * t)
    //   .duration(550 * t)
    //   .attr("opacity", 1);
  }, [animations]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default ScoreBoard;
