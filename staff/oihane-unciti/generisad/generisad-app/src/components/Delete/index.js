import React from 'react'

import { withRouter, Route, Redirect } from 'react-router-dom'


function Delete({ history }) {debugger
    
    
  
      return <>
          
        <h1>Lo has borrado correctamente</h1>
        <a class= "menu-nav__list"  href={`/#/myads`}><li>Volver a mis anuncios</li></a>
      </>
  }
  export default withRouter(Delete)