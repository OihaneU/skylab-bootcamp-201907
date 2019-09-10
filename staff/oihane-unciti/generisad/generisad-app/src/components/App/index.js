import React, { useState, useEffect } from 'react'
//import logo from './logo.svg';
import './index.sass'
import Register from '../Register'
import Login from '../Login'
// import logic from "../../logic"
import Search from '../Search'
import Landing from '../Landing'
// import Results from '../Result'
import queryString from 'query-string'
import Detail from '../Detail'
import Publish from '../Publish'


import { withRouter, Route, Redirect } from 'react-router-dom'




function App(props) {
  // const { } = useContext(Context)
  
// function handleSearch(query) {
//     setQuery(query)

//     props.history.push(`/search?q=${query}`)
//   }

//   useEffect(() => {
//     const { q: query } = queryString.parse(props.location.search)

//     setQuery(query)
//   }, [])



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Route exact path="/" render={() => <Landing/>} />
      {/* <Route path="/ad" render={() => <Search onSearch={handleSearch}  />} /> */}
      <Route path="/register" render={() => <Register />} />
      <Route path="/auth" render={() => <Login />} />
      <Route path='/publish' render={() => <Publish/> } />

      {/* <Route path="/ad/search" render={() => <Results query={query} />} /> */}
      {/* <Route path="/ad/search/:id" render={props => <Detail id={props.match.params.id} />} /> */}
      
      {/* <Route path="/search" render={() => <Results query={query} />} />
      <Route path="/ducks/:id" render={props => <Detail id={props.match.params.id} />} /> */}
    </div>
  );
}

export default withRouter(App);
