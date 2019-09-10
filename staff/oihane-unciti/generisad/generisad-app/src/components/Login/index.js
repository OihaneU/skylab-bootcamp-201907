import React, { useContext } from 'react'
import Context from '../Context'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'


function Login({ history, onSignUp, onClose, toLogIn, error }) {
    
  const {  } = useContext(Context)
  
  function handleSubmit(event) {
      event.preventDefault()
      const { target: { email: { value: email }, password: { value: password } } } = event
      handleLogin(email, password)
  }

  async function handleLogin(email, password) {
      try {
          const { token } = await logic.authenticateUser(email, password)
          
          logic.userCredentials =  token 
          history.push('/')
      } catch(error) {
          console.log(error.message)
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
                {/* {error && <Feedback message={error} />} */}  
                <button class= "button">Accede</button>
            </form>
            
          </div>
        </div>
      
      </section>
  
      </div>
    </>
}
export default withRouter(Login)