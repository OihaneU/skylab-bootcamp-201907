import React, { useState, useEffect, useContext } from 'react'
import Context from '../Context'
//import logo from './logo.svg';
import './index.sass'
import Register from '../Register'
import Login from '../Login'
import logic from "../../logic"
import Search from '../Search'
import Landing from '../Landing'
import Results from '../Results'
import queryString from 'query-string'
import Detail from '../Detail'
import Publish from '../Publish'


import { withRouter, Route, Redirect } from 'react-router-dom'




function App({history}) {debugger

  const { } = useContext(Context)
  const [query, setQuery] = useState()

  
  // const { } = useContext(Context)
  
    function handleSearch(query) {
        setQuery(query)

        history.push(`/search?q=${query}`)
      }

      useEffect(() => {
        const { q: query } = queryString.parse(history.location.search)

        setQuery(query)
      }, [])



  return (
    <div className="App">
    <Context.Provider value={{}}>

        <Route exact path="/" render={() => <Landing/>} />
        <Route path="/ad" render={() => <Search onSearch={handleSearch} />} /> 
        <Route path="/search" render={() => <Results query={query} />} />
        <Route path="/ads/:id" render={history => <Detail id={history.match.params.id} />} />
        <Route path="/register" render={() => <Register />} />
        <Route path="/auth" render={() => <Login />} />
        <Route path='/publish' render={() => <Publish/> } /> 
        {/* <Route path="/ad/search" render={() => <Results query={query} />} /> */}
      {/* <Route path="/ad/search/:id" render={props => <Detail id={props.match.params.id} />} /> */}
      
      {/* <Route path="/search" render={() => <Results query={query} />} />
      <Route path="/ducks/:id" render={props => <Detail id={props.match.params.id} />} /> */}
    </Context.Provider>
    

     
    </div>
  );
}

export default withRouter(App);
