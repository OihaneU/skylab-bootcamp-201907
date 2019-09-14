import React, { useState, useContext } from 'react'
import Context from '../Context'
import { Link , withRouter } from 'react-router-dom'
import logic from '../../logic'
import Feedback from '../Feedback'


function Login({ history }) {
    
  const { } = useContext(Context)
  const  [error, setError]  = useState()
  
  function handleSubmit(event) {
      event.preventDefault()
      const { target: { email: { value: email }, password: { value: password } } } = event
      handleLogin(email, password)
  }

  async function handleLogin(email, password) {
      try {
          await logic.authenticateUser(email, password)
          
          history.push('/')
      } catch({message}) {
          const translatedMessage = logic.translateMessage(message , email)
            setError(translatedMessage)
        //let translatedMessage = logic.translateError(message , email)
        //setError(message)
      }
  }
    return <>
        
        <div className="form-panel">

        <section class = "modal">
        <div class="modal-content">
          <div class="modal__-header">
            <span class="close"><a href={`/#/`} >&times;</a></span>
            <h2 class="register-title">Accede</h2>
          </div>
          <div class="modal__body">
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input class="modal__input" type="email" name="email" id=""/>
                <label htmlFor="">Contraseña</label>
                <input class="modal__input" type="password" name="password" id=""/>

                <p class="modal__p">¿Todavia no tienes cuenta? <a href={`/#/register`}>Accede</a></p>
                {error && <Feedback message={error} />} 
                <button class= "button">Accede</button>
            </form>
            
          </div>
        </div>
      
      </section>
  
      </div>
    </>
}
export default withRouter(Login)