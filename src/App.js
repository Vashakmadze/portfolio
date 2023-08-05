import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from 'react';
import Zoom from "react-reveal/Zoom";
import Wobble from 'react-reveal/Wobble';


function App() {

  useEffect(() => {
    document.title = "Luka's Portfolio"
  }, []);

  return (
    <div className="App">
      <Zoom>
        <Navbar />
        <Terminal />
      </Zoom>
      <Projects />
      <Wobble>
        <Contact />
      </Wobble>
    </div >
  );
}

export default App;
