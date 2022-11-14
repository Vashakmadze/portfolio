import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, NavLink} from "react-router-dom"
import { useState } from 'react';
import mobile from "./assets/mobile.jpg";
import other from "./assets/other.jpg";
import web from "./assets/web.jpg";


function App() {

  const [bgImage, setBgImage] = useState(web);

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed" }}>
      <div className='main-nav' >
        <div className='nav-items'>
          <NavLink onClick={() => setBgImage(web)}>
            Web
          </NavLink>
          <NavLink onClick={() => setBgImage(mobile)}>
            Mobile
          </NavLink>
          <NavLink  onClick={() => setBgImage(other)}>
            Other
          </NavLink>
        </div>
      </div>
    </div>
  );
} 

export default App;
