import React from 'react'
import './Side_menu.css';
const options = [
    {'name':'Dashboard','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/dashboard.svg'},
    {'name':'Game Store','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/game_store.svg'},
    {'name':'Live Stream TV','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/live_stream_tv.svg'},
    {'name':'Team Members','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/teams_member.svg'},
    {'name':'Badges','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/badges.svg'},
    {'name':'My Library','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/my_library.svg'},
    {'name':'Trophies','icon':'https://raw.githubusercontent.com/Rishik131/crackcube_frontend/247879605cceb1b2d75bda86d172e5be7efbb241/src/components/assets/trophies.svg'},
]

const side_menu_options = (option) => {
    return(
        <div className="options">
            {/* <img src={option.icon} alt={option.name} /> */}
            <div className="options1">
                <div className="icon">
                    <img src={option.icon} alt={option.name} />
                </div>
                <div className="label">
                    {option.name}
                </div>
            </div>
        </div>
    )
}

const Side_menu = () => {
  return (
    <>
        <div className="side_menu_sections">
            <div className="logo_section">
                <img src="https://raw.githubusercontent.com/Rishik131/crackcube_frontend/524643d4df7a64985e8a59aeff3f8726ec02e849/src/components/assets/Logo.svg" alt="Logo" />
            </div>
            <div className="options_section">
                <div className="options_section1">
                    {
                        options.map(side_menu_options)
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Side_menu