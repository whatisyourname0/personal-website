import HeadingContainer from "@components/HeadingContainer";
import useLocale from "@hooks/useLocale";
import helloWord from "@utils/locale/helloWord";
import styled from "styled-components";
import Introduction from "./introduction";
import logo192 from "@assets/images/logo/logo192.png";

function AboutMe() {
  const locale = useLocale();

  return (
    <Container>
      <HeadingContainer writeups="About Me" />
      <ContentContainer>
        <Description>
          <Hello>{helloWord(locale)}</Hello>
          <Introduction locale={locale} />
        </Description>
        <ImageWrapper>
          <ImageMySelf src={logo192} />
        </ImageWrapper>
      </ContentContainer>
    </Container>
  );
}

export default AboutMe;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  background-color: #fcfcfc;
`;

const ContentContainer = styled.section`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Hello = styled.h2`
  font-family: "Open Sans";
  font-size: 40px;
  font-weight: 500;

  margin-top: 20px;
  margin-bottom: 50px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img:first-child {
    margin-left: 100px;
  }
`;

const ImageMySelf = styled.img`
  width: 300px;
  height: 300px;
  vertical-align: middle;

  border: 5px solid black;
  border-radius: 100%;
`;