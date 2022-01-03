import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiNodejsSmall,
  DiJava,
} from "react-icons/di";
import { BsGraphUp } from "react-icons/bs";
import { SiTensorflow } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I&apos;ve worked with a range a technologies in the web development and
      machine learning. From Front-end to Back-end and Machine learning.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiNodejsSmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <SiTensorflow size="2.3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Machine Learning and Deep Learning</ListTitle>
          <ListParagraph>
            Experience with <br />
            Sklearn, Tensorflow and Keras.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL, MongoDB and Firebase.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJava size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Other languages</ListTitle>
          <ListParagraph>
            Experience with <br />
            C++, Python and Java.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <BsGraphUp size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Data based tools</ListTitle>
          <ListParagraph>
            Experience with <br />
            Numpy, Pandas, Matplotlib, Seaborn, BeautifulSoup and Selenium.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
