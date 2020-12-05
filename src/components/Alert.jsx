//Custom alerts to show when the name is misspelled or the input fienld is empty
import React from 'react'

const Alert = ({alert}) => {
    return (

        <div className ="alert">
            <h3>{alert}</h3>
            
        </div>
    )
}

export default Alert
