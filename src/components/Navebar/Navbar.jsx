import React from 'react';
import './Navbar.css';
import { FiSearch } from 'react-icons/Fi';
// import { FaBeer } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar1">
        <div className="nav_item1">
            <div className="search_bar">
                <div className="search_bar1">
                    <input type="text" className='search_bar3' placeholder='Search Game...'/>
                </div>
                <div className="search_bar2">
                    <button className="btn">
                        <FiSearch size={22} color='#21202B'/>
                        {/* <FaBeer /> */}
                    </button>
                </div>
            </div>
        </div>
        <div className="nav_item2">
            <div className="nav_item3">
                <div className="item1">
                    <img src="" alt="" />
                </div>
                <div className="item2"></div>
                <div className="item3"></div>
                <div className="item4"></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar