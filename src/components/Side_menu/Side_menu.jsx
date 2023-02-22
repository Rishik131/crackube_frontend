import React from 'react'
import './Side_menu.css';
const options = [
    {'name':'Dashboard', 'class':'dashboard','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/dashboard.svg'},
    {'name':'Game Store','class':'game_store','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/game_store.svg'},
    {'name':'Live Stream TV','class':'live_stream','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/live_stream_tv.svg'},
    {'name':'Team Members','class':'team_member','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/teams_member.svg'},
    {'name':'Badges','class':'badges','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/badges.svg'},
    {'name':'My Library','class':'library','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/my_library.svg'},
    {'name':'Trophies','class':'trophies','icon':'https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/trophies.svg'},
]

// const is_active = () => {
//     const sections = document.querySelector('.options1');

// }

const side_menu_options = (option) => {
    return(
        <div className="options" >
            {/* <img src={option.icon} alt={option.name} /> */}
                <div className={`options1 ${option.class}`} >
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

const Side_menu = (props) => {
  return (
    <>
        <div className="side_menu_sections">
            <div className="logo_section">
                <img src="https://raw.githubusercontent.com/Rishik131/crackube_frontend/dc4ae6bba6249625a0a3dce3db7d052441501e92/src/components/assets/Logo.svg" alt="Logo" />
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