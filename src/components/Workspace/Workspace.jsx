import React from 'react';
import './Workspace.css';
import Side_menu from '../Side_menu/Side_menu';
import {
    Routes,
    Route
} from "react-router-dom";
import Navbar from '../Navebar/Navbar';
import Workspace1 from '../Workspace1/Workspace1';
import { useState } from "react";

const Workspace = () => {
  const [currentActive,setCurrentActive] = useState('dashboard');
  const handleChange = () => {
    setCurrentActive('Games');
    console.log(currentActive);
  }
  return (
    <>
    <div className="testing" onClick={handleChange}>
      yes
    </div>
        <div className="workspace">
        <div class="div1 side_menu" >
          <Side_menu />
        </div>
        <div class="div2 navbar">
          <Navbar/>
        </div>
        <div class="div3 workspace1">
          <Workspace1 />
        </div>
      </div>
    </>
  )
}

export default Workspace;
// currentActive={currentActive}