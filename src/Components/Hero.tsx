import { styled } from "styled-components";
import pics from "../assets/mike.png";
// import saveAs from "file-saver";
// import cv from "../assets/CV-Eben.pdf";

const Hero = () => {
  return (
    <Container id="home">
      <Wrapper>
        <Left>
          <h1>
            <span
              style={{
                fontFamily: "sans-serif",
                color: "transparent",
                WebkitTextStroke: "1.5px #827ae0",
              }}
            >
              Hi,
            </span>{" "}
            I'm Igbuku<br /> Michael Blessing
          </h1>
          <p>
             A creative, versatile, diligent, optimistic, innovative Graphics Designer.
          </p>

          {/* <a href={cv} download="resume">
            <Button>Download cv</Button>
          </a> */}
        </Left>
        <Right>
          <img src={pics} alt="Finbarr's Image" />
        </Right>

        
        <Circles>
            <Circle1></Circle1>
            <Circle2></Circle2>
            <Circle3></Circle3>
            <Circle4></Circle4>
        </Circles>

        <Circles1>
            <Circle1></Circle1>
            <Circle2></Circle2>
            <Circle3></Circle3>
            <Circle4></Circle4>
        </Circles1>

        <Circles3>
            <Circle1></Circle1>
            <Circle2></Circle2>
            <Circle3></Circle3>
            <Circle4></Circle4>
        </Circles3>

        <Circles4>
            <Circle1></Circle1>
            <Circle2></Circle2>
            <Circle3></Circle3>
            <Circle4></Circle4>
        </Circles4>
          
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Circles4 = styled.div`
position: absolute;
display: flex,
align-items: center;
gap: 7px;
bottom: 30px;
right: 20px;
`;

const Circles3 = styled.div`
position: absolute;
display: flex,
align-items: center;
gap: 7px;
bottom: 40px;
right: 0px;
`;

const Circles1 = styled.div`
position: absolute;
display: flex,
align-items: center;
gap: 7px;
top: 40px;
right: 20px;

@media screen and (max-width: 500px) {
  top: 240px;
}
`;

const Circle1 = styled.div`
width: 10px;
height: 10px;
background-color: white;
border-radius: 50%;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
  width: 6px;
  height: 6px;
}
`;

const Circle2 = styled.div`
width: 10px;
height: 10px;
background-color: white;
border-radius: 50%;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
  width: 6px;
  height: 6px;
}
`;

const Circle3 = styled.div`
width: 10px;
height: 10px;
background-color: white;
border-radius: 50%;
margin-bottom: 10px;

@media screen and (max-width: 768px) {
  width: 6px;
  height: 6px;
}
`;

const Circle4 = styled.div`
width: 10px;
height: 10px;
background-color: white;
border-radius: 50%;

@media screen and (max-width: 768px) {
  width: 6px;
  height: 6px;
}
`;

const Circles = styled.div`
position: absolute;
display: flex,
align-items: center;
gap: 7px;
top: 50px;
right: 0;

@media screen and (max-width: 500px) {
  top: 250px;
}
`;

const Right = styled.div`
position: relative;
  width: 450px;
  height: 450px;
  background-color: #827ae0;
  border-radius: 50%;
  /* background-color: gold; */
  margin-left: 50px;
  margin-bottom: 90px;
  margin-top: 30px;
  opacity: 0;
  animation: slideInFromRight 1s ease-in-out 0.5s forwards;
  margin-bottom: 20px;
  overflow: hidden;

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      margin-left: 100%; /* Start position outside the right edge */
    }
    to {
      opacity: 1;
      margin-left: 50px; /* End position */
    }
  }

  // @media screen and (max-width: 425px) {
  //   width: 200px;
  //   height: 300px;
  //   margin: 0;
  //   margin-top: 30px;
  //   animation: none;
  //   opacity: 1;
  // }

  @media screen and (max-width: 500px) {
    width: 280px;
    height: 280px;
    margin: 0;
    margin-top: 30px;
    animation: none;
    opacity: 1;
  }

  @media screen and (min-width: 700px) and (max-width: 1000px) {
    width: 80%;
    height: 80%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// const Button = styled.button`
//   width: 170px;
//   height: 50px;
//   background-color: #827ae0;
//   border-radius: 30px;
//   border: none;
//   color: white;
//   font-size: 18px;
//   margin-top: 25px;
//   cursor: pointer;

//   @media screen and (max-width: 900px) {
//     width: 120px;
//     font-size: 14px;
//     height: 45px;
//   }
// `;

const Left = styled.div`
  margin-top: 70px;
  opacity: 0;
  transform: rotate(-45deg); /* Initial rotation */
  animation: slideInAndRotate 1s ease-in-out 0.5s forwards;

  @keyframes slideInAndRotate {
    from {
      opacity: 0;
      margin-top: 70px; /* Start margin-top value */
      transform: rotate(-45deg) translateY(100px); /* Start rotation and translation */
    }
    to {
      opacity: 1;
      margin-top: 70px; /* End margin-top value */
      transform: rotate(0deg) translateY(0); /* End rotation and translation */
    }
  }

  @media screen and (max-width: 900px) {
    margin-top: 45px;
  }
  h1 {
    font-size: 60px;
    color: white;
    /* color: transparent; */

    @media screen and (max-width: 900px) {
      font-size: 30px;
      text-align: center;
    }
  }
  p {
    width: 500px;
    margin: 0;
    font-size: 17px;
    color: white;

    @media screen and (max-width: 900px) {
      font-size: 13px;
      /* text-align: center; */
      width: 300px;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #150E28;
  // background-color: #3e0a75;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 60px;

  @media screen and (max-width: 500px) {
    height: 600px;
  }
  @media screen and (min-width: 700px) and (max-width: 1000px) {
    height: 370px;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  position: absolute;

  justify-content: space-between;

  @media screen and (max-width: 500px) {
    display: block;
  }
  /* margin-top: 80px; */
`;
