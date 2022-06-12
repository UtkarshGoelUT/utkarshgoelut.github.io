import React, { useEffect, useState } from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

// import ScrollMagic from "scrollmagic";
// let ScrollMagic;
// if (process.client) {
//   ScrollMagic = require("scrollmagic");
//   // use scrollmagic
// }

const Acomplishments = () => {
  const [data, setData] = useState([
    { number: 0, final: 5, info: " star", text: "Codechef" },
    { info: "Specialist", text: "Codeforces" },
    { number: 0, final: 1825, info: " rating", text: "Leetcode" },
    { number: 0, final: 303, info: " rank", text: "Google Kickstart" },
  ]);

  // useEffect(() => {
  //   var controller = new ScrollMagic.Controller();

  //   const scene = new ScrollMagic.Scene({
  //     triggerElement: ".accom",
  //   });

  //   const min = (a, b) => (a < b ? a : b);

  //   const updateNumbers = () => {
  //     var updated = false;
  //     var md = Infinity;
  //     setData(
  //       data.map((info) => {
  //         if ("number" in info && info.number < info.final) {
  //           info.number += 1;
  //           updated = true;
  //           md = min(md, info.final - info.number);
  //         }
  //         return info;
  //       })
  //     );
  //     if (updated) {
  //       var speed = 200 / md;
  //       setTimeout(updateNumbers, speed);
  //     }
  //   };

  //   scene.addTo(controller);
  //   scene.on("enter", () => {
  //     updateNumbers();
  //   });
  // }, []);

  return (
    <Section className="accom">
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            <BoxNum>{`${"number" in card ? card.final : ""}${
              "info" in card ? card.info : "+"
            }`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
