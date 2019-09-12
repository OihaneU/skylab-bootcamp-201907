import React  from 'react'

import { Link , withRouter } from 'react-router-dom'






function Feedback({ message}) { 
    return <p className="feedback">{message}</p>
}

export default withRouter(Feedback)