import React, { useEffect } from "react";
import * as d3 from "d3";

export const TextBoard = ({
  id,
  section,
  animations,
  info,
  colors,
  timeline,
  rectWidth,
  rectHeight,
  transX,
  expandDir
}) => {
  useEffect(() => {
    const gBoard = d3.select(`.g-textboard-${section}-${id}`);
    let rectNode = gBoard.select(".rect");
    let textNode = gBoard.select(".text");
    if (animations.length !== 0) {
      if (rectNode.empty()) {
        rectNode = gBoard
          .append("rect")
          .attr("class", "rect")
          .attr("x", expandDir === "left" ? rectWidth : 0)
          .attr("width", 0)
          .attr("height", rectHeight)
          .attr("fill", colors.rect)
          .transition()
          .delay(timeline.rect.delay)
          .duration(timeline.rect.duration)
          .attr("x", 0)
          .attr("width", rectWidth);
      }

      if (textNode.empty()) {
        textNode = gBoard
          .append("text")
          .attr("class", "text")
          .attr("x", expandDir === "left" ? rectWidth * 0.65 : rectWidth * 0.45)
          .attr("y", rectHeight / 2)
          .attr("text-anchor", "middle")
          .attr("alignment-baseline", "central")
          .attr("font-weight", "bold")
          .attr("font-size", 40)
          .attr("fill", colors.text)
          .text(`${info.text}`)
          .attr("opacity", 0)
          .transition()
          .delay(timeline.text.delay)
          .duration(timeline.text.duration)
          .attr("opacity", 1)
          .attr("x", rectWidth * 0.5);
      }
    } else {
      rectNode
        .transition()
        .delay(timeline.rect.delay)
        .duration(timeline.rect.duration)
        .attr("x", expandDir === "left" ? rectWidth : 0)
        .attr("width", 0);

      textNode
        .transition()
        .delay(timeline.rect.delay)
        .duration(timeline.rect.duration)
        .attr("opacity", 0)
        .attr("x", expandDir === "left" ? rectWidth * 0.65 : rectWidth * 0.45)
        
    }
  }, [
    id,
    section,
    animations,
    info,
    colors,
    timeline,
    rectWidth,
    rectHeight,
    transX,
    expandDir
  ]);

  return (
    <g
      className={`g-textboard-${section}-${id}`}
      transform={`translate(${transX}, 0)`}
    />
  );
};
