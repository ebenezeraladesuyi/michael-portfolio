import { Footer, Header } from "./Blocks";
import {
  About,
  Contact,
  Hero,
  Portfolio,
} from "./Components";
import { Circle } from "./common";

const App = () => {
  return (
    <div style={{overflow:"hidden"}}>
      <Header />
      <Hero />
      <Circle />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
