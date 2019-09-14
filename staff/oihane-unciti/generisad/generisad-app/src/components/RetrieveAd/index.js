import React, { useState, useEffect } from 'react'
import logic from '../../logic'
import { withRouter, Link, Route, Redirect } from 'react-router-dom'

import Nav from "../Nav"

function RetrieveAd ({ history }) {
    const [myAds, setMyAds] = useState()


    async function handleDelete(i) {
        if (!logic.isUserLoggedIn()) {
            history.push('/auth')
        } else {
            try {
                await logic.removeAd(i)
                history.push('/delete')
                console.log("delete add")
            } catch (error) {
                console.log(error.message)

            }
        }
    }


    useEffect(() => {
        (async () => {
            try{
                const _ads = await logic.retrieveMyAds()
                
                setMyAds(_ads)
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
                                <img src={item.image}></img>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                                <p>{item.location}</p>  
                                <button onClick={() => handleDelete(item._id)}>Borrar Anuncio</button>
                
                            
        </li>)}
    </ul>
    </>
}
export default withRouter(RetrieveAd)