import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Hold>
        <a href="https://github.com">
          <AiFillGithub size={25} style={{ marginRight: "15px" }} />
        </a>
        <a href="https://www.linkedin.com">
          <AiFillLinkedin size={25} style={{ marginRight: "15px" }} />
        </a>
        <a href="https://www.facebook.comi">
          <BsFacebook size={25} />
        </a>
      </Hold>
      <p>
        {" "}
        &copy; {new Date().getFullYear()} 
      </p>
    </Container>
  );
};

export default Footer;

const Hold = styled.div`
  display: flex;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    color: black;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;

  p {
    margin-top: 0;
    display: flex;
    align-items: center;
    font-weight: 700;
  }
`;
