import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "Luka's Portfolio"
 }, []);

  return (
    <div className="App">
      <Navbar />
      <Terminal />  
      <Projects />
      <Contact />
    </div>
  );
} 

export default App;
