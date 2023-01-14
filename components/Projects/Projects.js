import React, { useEffect } from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Div,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { FaReact, FaNode } from "react-icons/fa";
import { DiMongodb, DiPython } from "react-icons/di";
import { SiTensorflow, SiSelenium, SiFirebase } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import theme from "../../themes/default";
// import ScrollOut from "scroll-out";

const Projects = () => {
  useEffect(() => {
    // ScrollOut({
    //   scrollingElement: "#project-cards",
    //   onShown(el) {
    //     el.classList.add("animate__fadeInRight");
    //   },
    // });
  }, []);

  const getTagLogo = (t) => {
    if (t == "React") return <FaReact size="30px" />;
    else if (t == "Mongo") return <DiMongodb size="30px" />;
    else if (t == "Node") return <FaNode size="30px" />;
    else if (t == "MySQL") return <GrMysql size="30px" />;
    else if (t == "Tensorflow") return <SiTensorflow size="30px" />;
    else if (t == "Selenium") return <SiSelenium size="30px" />;
    else if (t == "Firebase") return <SiFirebase size="30px" />;
    else if (t == "Python") return <DiPython size="30px" />;
    else return t;
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer style={{ padding: "0" }}>
        {projects.map((p, i) => {
          return (
            <BlogCard
              key={i}
              id="project-cards"
              className={"animate__animated"}
              data-scroll
              style={{ marginLeft: "70px", marginRight: "70px" }}
            >
              <Img src={p.image} />
              <Div>
                <TitleContent>
                  <HeaderThree title>{p.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo className="card-info">{p.description}</CardInfo>
                <div>
                  <TitleContent>
                    <strong>Technologies used:</strong>
                  </TitleContent>
                  <TagList>
                    {p.tags.map((t, i) => {
                      return <Tag key={i}>{getTagLogo(t)}</Tag>;
                    })}
                  </TagList>
                </div>
                <UtilityList>
                  <ExternalLinks href={p.visit}>Visit</ExternalLinks>
                  <ExternalLinks href={p.source}>Source</ExternalLinks>
                </UtilityList>
              </Div>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
