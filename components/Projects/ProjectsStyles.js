import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
  overflow: hidden;
`;

export const Div = styled.div`
  transform: translateY(-20px);
  border-radius: 20px;
  z-index: 20;
  background: #0f1624;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 90%;
  border-radius: 20px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  margin-top: 10px;
  width: 100%;
  padding: 20px;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 24px;
    line-height: 28px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`;

export const Hr = styled.hr`
  width: 70px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #ffff00;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;

  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  font-family: sans-serif;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  width: 90%;
  margin: 1.5rem 0 0 0;
  background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
`;
