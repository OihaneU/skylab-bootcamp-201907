import React from 'react'

export default function({ onSignUp, onClose, toLogIn, error }) {
    return <>
        <a href="" className="close" onClick={event => {
            event.preventDefault()

            onClose()
        }}></a>
        <div className="form-panel">

        <section class = "modal">
        <div class="modal-content">
          <div class="modal__-header">
            <span class="close"><a href={`/#/`} >&times;</a></span>
            <h2 class="register-title">Accede</h2>
          </div>
          <div class="modal__body">
            <form action="">
                <label for="">Email</label>
                <input class="modal__input" type="email" name="email" id=""/>
                <label for="">Contraseña</label>
                <input class="modal__input" type="text" name="password" id=""/>

                <p class="modal__p">¿Todavia no tienes cuenta? <a href={`/#/register`}>Accede</a></p>
                {/* {error && <Feedback message={error} />} */}
                <button class= "button">Registrate</button>
            </form>
          </div>
        </div>
      
      </section>
        <a href="" className="button" onClick={event => {
            event.preventDefault()

            toLogIn()
        }}></a>
        </div>
    </>
}