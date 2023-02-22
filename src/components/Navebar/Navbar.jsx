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
                    <div className="icons">
                        <div className="img_container">
                        <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/86fd865e17633f721bc79472142f1077f17c2bb5/src/components/assets/navbar_setting.svg"
                            alt="Trending" />
                        </div>
                    </div>
                </div>
                <div className="item2">
                <div className="icons">
                        <div className="img_container">
                        <div className="notification">
                        <div className="notification_icon">
                            <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/86fd865e17633f721bc79472142f1077f17c2bb5/src/components/assets/navbar_notification.svg"
                                alt="notifications" />
                        </div>
                        <div className="notification_indicator">
                            <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/86fd865e17633f721bc79472142f1077f17c2bb5/src/components/assets/navbar_notification_red.svg"
                                alt="" />
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
                <div className="item3">
                <div className="icons">
                        <div className="img_container">
                            <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/86fd865e17633f721bc79472142f1077f17c2bb5/src/components/assets/navbar_achievements.svg"
                                alt="achievements" />
                        </div>
                    </div>
                </div>
                <div className="item4">
                    <div className="icons">
                        <div className="img_container">
                            <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/86fd865e17633f721bc79472142f1077f17c2bb5/src/components/assets/navbar_profile.svg"
                                alt="profile" id='profile' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar