import styled from "styled-components";
import img from "../images/login-background.jpg";
import firstimg from "../images/cta-logo-one.svg";
import secimg from "../images/cta-logo-two.png";
import { Link } from "react-router-dom";
import "../scss/pagesStyle/Entry.scss";
const Entry = () => {
  return (
    <Container>
      <Content>
        <Eldiv>
          <Elimg1 src={firstimg} />
          <Link to="/Login" className="btn">
            Let's Get Start
          </Link>
          <div>
            <Para>
              Disney+ Hotstar: Your gateway to endless entertainment.From
              beloved classics to exclusive originals, dive into a world of
              immersive storytelling.
            </Para>
          </div>
          <Elimg2 src={secimg} />
        </Eldiv>
        <BgImg></BgImg>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImg = styled.div`
  background: url(${img});
  height: 100%;
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  z-index: -1;
`;

const Eldiv = styled.div`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Elimg1 = styled.img`
  width: 100%;
  margin-bottom: 12px;
  display: block;
`;

const Para = styled.p`
  line-height: 1.5;
  width: 100%;
  font-size: 13px;
  letter-spacing: 1.5px;
`;
const Elimg2 = styled.img`
  width: 100%;
  vertical-align: bottom;
  display: inline-block;
`;
export default Entry;
