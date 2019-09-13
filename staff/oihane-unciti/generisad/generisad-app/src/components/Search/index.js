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
        <input type="text" name="query" />
        <button>Search</button>
    </form>

    </>
}
export default withRouter(Search)