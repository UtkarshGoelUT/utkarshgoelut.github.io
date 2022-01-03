import React, { useEffect } from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
// import ScrollOut from "scroll-out";
import theme from "../../themes/default";

const Hero = (props) => {
  const typeWriter = function (txtElement, words, wait = 100) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wait = parseInt(wait);
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
  };

  typeWriter.prototype.type = function () {
    const curIndex = this.wordIndex % this.words.length;
    const fullTxt = this.words[curIndex];

    if (this.isDeleting) {
      this.txt = fullTxt.substr(0, this.txt.length - 1);
      this.wait -= 10;
      if (this.txt == "") {
        this.wordIndex++;
        this.isDeleting = false;
      }
    } else {
      this.txt = fullTxt.substr(0, this.txt.length + 1);
      this.wait += 10;
      if (this.txt.length == fullTxt.length) {
        this.isDeleting = true;
      }
    }
    this.txtElement.innerHTML = `<span class='txt'>${this.txt}</span>`;
    setTimeout(() => this.type(), this.wait);
  };

  const init = () => {
    const txtElement = document.querySelector("#typed");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");

    new typeWriter(txtElement, words, wait);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle
            main
            center
            className="animate__animated animate__bounce"
            data-scroll
          >
            👋Hey there, <br />I am Utkarsh
          </SectionTitle>
          <SectionText>
            I am a Computer Science Undergraduate at Punjab Engineering College,
            Chandigarh. I ❤️{" "}
            <span
              id="typed"
              data-wait="100"
              data-words='["Web Development!", "Machine learning!", "Competitive programming!"]'
            >
              Web Development!
            </span>
          </SectionText>
          <Button onClick={props.handleClick}>Learn More</Button>
        </LeftSection>
      </Section>
    </>
  );
};

export default Hero;
