import styled from "styled-components";
import { iProjects } from "../utils/interface";
// import { AiOutlineArrowRight } from "react-icons/ai";

const Projects: React.FC<iProjects> = ({ title, image, desc }) => {
  return (
    <Container>
      <Image>
        <img src={image} alt="" />
      </Image>
      
        <h5>{title}</h5>
      
      <p>{desc}</p>
    </Container>
  );
};

export default Projects;

// const Icon = styled(AiOutlineArrowRight)`
//   margin-left: 8px;
//   margin-top: 6px;
// `;

const Image = styled.div`
  width: 100%;
  height: 350px;
  /* background-color: gold; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;

    @media-screen and (max-width: 500px) {
      object-fit: contain;
    }
  }
`;

const Container = styled.div`
  width: 48.7%;
  min-height: 550px;
  /* margin-bottom: 20px; */

  a {
    text-decoration: none;
    color: black;

    span {
      color: #827ae0;
      text-decoration: underline;
      display: flex;
      align-items: center;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  h5 {
    font-size: 25px;
    margin: 0;
    margin-top: 10px;
    color: #827ae0;
  }
  p {
    width: 570px;
    font-size: 17px;
    color: gray;

    @media screen and (max-width: 500px) {
      width: 350px;
    }
    @media screen and (min-width: 700px) and (max-width: 1000px) {
      width: 700px;
    }
  }
`;
