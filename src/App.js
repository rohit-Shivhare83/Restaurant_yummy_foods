import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Dishes from "./Components/Dishes/Dishes";
import Branches from "./Components/Branches/Branches";
import Footer from "./Components/Footer/Footer";
import Reply from "./Components/Leave A Reply/Reply";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Dishes />
      <Branches />
      <Contact />
      <Reply />
      <Footer />
    </>
  );
}

export default App;
