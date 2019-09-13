import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import { withRouter, Link, Route, Redirect } from 'react-router-dom'

import Nav from "../Nav"

function Message ({ history }) {
    const [mails, setMails] = useState()
debugger

function handleResponse () {

    if (logic.isUserLoggedIn()){
        

        //  history.push('/response')
        //  history.push ({
        //     pathname: '/reponse', 
        //     state: { detail: item._id }})
    }
    else{
        history.push('/auth')
    }
   
  }
    useEffect(() => {
        (async () => {
            try{
                const _mails = await logic.retrieveMessage()
                // receivers = await Promise.all(mails.map( mail => 
                //     await logic.retrieveUser(mail.receiver)    
                // ))
                // senders = await Promise.all(mails.map( mail => 
                //     await logic.retrieveUser(mail.sender)    
                // ))
                // _mails.receivers = receivers
                // _mails.senders = senders
                
                setMails(_mails)
            }catch(error){
                console.log(error.message)
            }
         
        })()
    }, [])

    return <>
    
        <Nav/>
     <ul>
      {/* {ads && ads.length && ads.map(({_id, image, title, desciption, location}) => <li key={_id}><a href={`/#/ads/${_id}`}>{image, title, desciption, location}</a></li>)} */}
      {mails && mails.length && mails.map(item => <li key={item._id}>
                                    <p>Enviado por: {item.sender}</p>
                                   <h2>{item.receiver}</h2>
                                   <p>{item.title}</p>
                                   <p>{item.body}</p>
                                   <p>{item.location}</p>  
                                   <Link to={`/response/${item._id}`} >Contesta</Link>
                            
        </li>)}
    </ul>
    </>
}
export default withRouter(Message)