import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'

function SendEmail ({history}) {
    debugger
    const _id =history.location.pathname.slice(6)
    console.log(_id)
    debugger
    //const [message, setMessage] = useState(null)

    function handleSubmit(event) {
        event.preventDefault()
        const { target: { title: {value:title}, body: {value:body} } } = event
       handleMessage(title, body)
    }

    async function handleMessage(title, body) {
        debugger
        try {
            await logic.sendEmail(_id, title, body)
            history.push('/message')
        } catch(error) {
            console.log(error.message)
        }
    }

//    { useEffect(() => {

//         async function handleUser() {
    
//             try {
//               (async () => {
//                 const mails = await logic.retrieveMessage()
                
//                 setMessage(mails)
//               })()
         
//             } catch (error) {
//               setError(error)
//             }
//           }
      
        // todo funcion selfie - llame a logica - endpoint
        //return lo seteas a usestate
        // en render condicionas que si hay usestate pinte-

    // }),[]()}

    
    return <section>
        <h1>Message</h1>

        <form onSubmit={handleSubmit}>
                <label for="">Title</label>
                <input class="modal__input" type="text" name="title" id=""/>
                <label for="">Email</label>
                <input class="modal__input" type="text" name="body" id=""/>

                <button class= "button">Enviar</button>
        </form>

    
    </section>
}

export default withRouter(SendEmail)