import styled from "styled-components";
import { Projects } from "../common";
import gift from "../assets/lyfeCareLogo.jpg";
import doc from "../assets/Screenshot_20230928-183622.png";
import fur from "../assets/LyfeCareFlyer.png";
import istand from "../assets/volatic-Ado.png";
import eco from "../assets/binLogo.png";
import naija from "../assets/Screenshot_20230928-183604.png"

const Portfolio = () => {
  return (
    <Container id="portfolio">
      <h2>Portfolio</h2>
      <h4>Awesome Projects</h4>
      <Holding>
        <Projects
          title="One People, One Nation Branding"
          image={doc}
          desc="Branding the Naija in Diaspora T-Shirts in celebration of the organization anniverasary"
        />
        <Projects
          title="LYFECARE Health Tech App Logo Design"
          image={gift}
          desc="Created an attractive and communicative brand logo for LyfeCare Health Tech, an app that allow users save for health emergencies." 
          />
        <Projects
          title="LyfeCare Health Care Flyer"
          image={fur}
          desc="Created an attractive flyer for LyfeCare Health Tech in crating awarenesss to users towards the launch of the app"
        />
        <Projects
          title="Volatic Academy Awareness Flyer"
          image={istand}
          desc="Designed a flyer for an established Tech Academy in creating awareness and advertising, towards bringing in Teacvh enthusiasts."
        />
        <Projects
          title="T-shirts Branding for Volatic Clothings"
          image={naija}
          desc="Branded T-shirts, witha good design, creativa and attractive outlook for Volatic Clothings"
        />
        <Projects
          title="ecoBin Logo Design"
          image={eco}
          desc="Designed the logo of a Tech Company, ecoBin, that deasls with recycling and cleaning of wastes."
        />
      </Holding>
    </Container>
  );
};

export default Portfolio;

const Holding = styled.div`
  width: 90%;
  min-height: 200px;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 900px) {
    margin-top: 0px;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin-top: 60px;

  @media screen and (max-width: 900px) {
    margin-top: 25px;
  }
  /* background-color: #f5f5f5; */

  h2 {
    font-size: 130px;
    color: transparent;
    -webkit-text-stroke: 1px lightgray;
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;

    @media screen and (max-width: 900px) {
      font-size: 50px;
    }
  }

  h4 {
    position: absolute;
    top: 6%;
    margin-left: 20px;
    font-size: 39px;
    margin: 0;

    @media screen and (max-width: 900px) {
      top: 1.2%;
      font-size: 20px;
    }
  }
`;
