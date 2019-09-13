import React, { useState, useEffect } from 'react'
import logic from '../../logic'

import { withRouter, Route, Redirect } from 'react-router-dom'

function Response ({ history }) {

    const _id =history.location.pathname.slice(10)
    console.log(_id)
    
    const [response, setResponse] = useState()
    const  [error, setError] = useState()
    // const state = history.location.state.item_id



    
    function handleSubmit(event) {
        event.preventDefault()
        const { target: { title: {value:title}, body: {value:body} } } = event
       handleResponse(title, body)
    }

    async function handleResponse(title, body) {
        debugger
        try {
            await logic.response(_id, title,body)
            history.push('/message')
        } catch(error) {
            console.log(error.message)
        }
    }

   

    
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

export default withRouter(Response)