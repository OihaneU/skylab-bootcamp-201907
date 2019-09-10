import React, { useContext } from 'react'
import Context from '../Context'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'



function Logout() {
    
    const { setCredentials } = useContext(Context)

  
    
    function handleLogout (){
        delete sessionStorage.clear()
    }
         
    return <>
        <section>
            <a href="" onClick={() => handleLogout()}>LOGOUT</a>
        </section>
    </>
}

export default withRouter(Logout)