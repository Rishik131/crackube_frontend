import React from 'react'

const Workspace1 = (props) => {
    if(props.currentActive === 'dashboard')
    {
        return (
            <div>Dashboard</div>
          )
    }
    else
    {
        return(
            <div>404 error</div>
        )
    }
  
}

export default Workspace1