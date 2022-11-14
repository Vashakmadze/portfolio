import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Terminal from "./components/Terminal/Terminal";
import Projects from "./components/Projects/Projects";



function App() {

  return (
    <div className="App">
      <Navbar />
      <Terminal />  
      <Projects />
    </div>
  );
} 

export default App;
