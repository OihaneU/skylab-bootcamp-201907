import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import { withRouter, Route, Redirect } from 'react-router-dom'

import Nav from "../Nav"

function Message ({ history }) {
    const [myAds, setMyAds] = useState()
debugger



    if (logic.isUserLoggedIn()){
        

        //  history.push('/response')
    }
    else{
        history.push('/auth')
    }
   
  }


  function handleDelete () {

    if (logic.isUserLoggedIn()){

         onDelete()
    }
    else{
        history.push('/auth')
    }
   
  }

  async function onFavorites(){debugger
    try{
         await logic.delete(id)
         console.log("corectly add")


    }catch(error){
        console.log(error.message)

    }
}
    useEffect(() => {
        (async () => {
            try{
                const ads = await logic.retrieveUserAd()
                
                setMyAds(_myAds)
            }catch(error){
                console.log(error.message)
            }
         
        })()
    }, [])

    return <>
    
        <Nav/>
     <ul>
      {/* {ads && ads.length && ads.map(({_id, image, title, desciption, location}) => <li key={_id}><a href={`/#/ads/${_id}`}>{image, title, desciption, location}</a></li>)} */}
      {myAds && myAds.length && myAds.map(item => <li key={item._id}>
        <img src={ad.image}></img>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.location}</p>  
            <button onClick={() => handleDelete(item._id)}>Borrar</button>
                                   {/* <button onClick={() => onResponse(item._id)}>Contestar</button> */}
                            
        </li>)}
    </ul>
    </>
}
export default withRouter(Message)