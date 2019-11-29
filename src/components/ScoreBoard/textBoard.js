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
    let imgNode = gBoard.select(".logo");
    let lineNode = gBoard.select(".split");

    if (animations.length !== 0) {
      if (rectNode.empty()) {
        rectNode = gBoard
          .append("rect")
          .attr("class", "rect")
          .attr(
            "x",
            expandDir === "left"
              ? rectWidth
              : expandDir === "center"
              ? rectWidth * 0.5
              : 0
          )
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
        textNode = gBoard.append("text").attr("class", "text");

        textNode
          .attr("x", () => {
            switch (expandDir) {
              case "left":
                return rectWidth * 0.65;
              case "center":
                return rectWidth * 0.5;
              case "right":
                return rectWidth * 0.45;
              case "right-with-image":
                return (rectWidth - 90) * 0.4 + 90; //90 is logoRect width
            }
          })
          .attr("y", rectHeight / 2)
          .attr("text-anchor", "middle")
          .attr("font-weight", expandDir === "center" ? 1000 : "bold")
          .attr("font-size", expandDir === "center" ? 32 : 40)
          .attr("fill", colors.text)
          .attr("opacity", 0)
          .transition()
          .delay(timeline.text.delay)
          .duration(timeline.text.duration)
          .attr("opacity", 1)
          .attr("font-size", expandDir === "center" ? 46 : 40)
          .attr(
            "x",
            expandDir === "right-with-image"
              ? (rectWidth - 90) * 0.5 + 90
              : rectWidth * 0.5
          );

        if (info.text_next) {          
          textNode
            .append("tspan")
            .attr("dx", 0)
            .attr("dy", rectHeight * 0.25)
            .text(`${info.text}`);
          textNode
            .append("tspan")
            .attr("dx", 10)
            .attr("fill", colors.text_next)
            .attr("font-size", 46)
            .attr("font-weight", "1000")
            .text(`${info.text_next}`);
        } else {
          textNode
            .append("tspan")
            .attr("dy", rectHeight * 0.25)
            .text(`${info.text}`);
        }
      }
      if (info.image && imgNode.empty()) {
        imgNode = gBoard
          .append("image")
          .attr("class", "logo")
          .attr("x", 20) // (45 - 25) = 10
          .attr("y", (rectHeight - 50) / 2) // 50 is logo image height( or width)
          .attr("xlink:href", info.image)
          .attr("width", 50)
          .attr("height", 50)
          .attr("opacity", 0)
          .transition()
          .delay(timeline.image.delay)
          .duration(timeline.image.duration)
          .attr("opacity", 1);

        lineNode = gBoard
          .append("rect")
          .attr("class", "split")
          .attr("x", 90)
          .attr("width", 2)
          .attr("height", rectHeight)
          .attr("fill", colors.line)
          .attr("opacity", 0)
          .transition()
          .delay(timeline.image.delay)
          .duration(timeline.image.duration)
          .attr("opacity", 0.6);
      }
    } else {
      rectNode
        .transition()
        .delay(timeline.rect.delay)
        .duration(timeline.rect.duration)
        .attr(
          "x",
          expandDir === "left"
            ? rectWidth
            : expandDir === "center"
            ? rectWidth * 0.5
            : 0
        )
        .attr("width", 0);

      textNode
        .transition()
        .delay(timeline.rect.delay)
        .duration(timeline.rect.duration)
        .attr("opacity", 0)
        .attr(
          "x",
          expandDir === "left"
            ? rectWidth * 0.65
            : expandDir === "center"
            ? rectWidth * 0.5
            : rectWidth * 0.45
        );

      if (info.image) {
        imgNode
          .transition()
          .delay(timeline.image.delay)
          .duration(timeline.image.duration)
          .attr("opacity", 0);

        lineNode
          .transition()
          .delay(timeline.image.delay)
          .duration(timeline.image.duration)
          .attr("opacity", 0);
      }
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
