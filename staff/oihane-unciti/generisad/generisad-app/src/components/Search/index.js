import React from 'react'
import Nav from "../Nav"
import { withRouter } from 'react-router-dom'
function Search ({history}) {
    return <>
    
    <Nav />
    <form onSubmit={event => {
        event.preventDefault()

        const { target: { query: { value: query }}} = event

        history.push(`/search?query=${query}`)
    }}>
        <section class="search">
                <p class="wrapper"><input className ="search__input" type="text" name="query" placeholder="&#61442; Encuentra tu producto"/><button className ="search__button">🏸</button></p>
                
        </section>
        
    </form>

    

    </>
}
export default withRouter(Search)