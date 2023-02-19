import React from 'react';
import './Workspace.css';
import Side_menu from '../Side_menu/Side_menu';
import {
    Routes,
    Route
} from "react-router-dom";

const Workspace = () => {
  return (
    <>
        <div className="workspace">
        <div class="div1 side_menu" >
          <Side_menu/>
        </div>
        <div class="div2 navbar">
          {/* <Navbar/> */}a
        </div>
        <div class="div3 workspace1">
          {/* <Workspace/> */}b
            <Routes>
                <Route />
            </Routes>
        </div>
      </div>
    </>
  )
}

export default Workspace