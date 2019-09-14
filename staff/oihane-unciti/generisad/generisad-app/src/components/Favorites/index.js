import React, { useState, useEffect } from 'react'
import logic from '../../logic'

export default function ({ }) {
    const [favs, setFavs] = useState()
    
    useEffect(() => {
        (async () => {
            const _favs = await logic.retrieveFavorites()

            setFavs(_favs)

        })()
    }, [])

    return <>
     <ul>
      {/* {ads && ads.length && ads.map(({_id, image, title, desciption, location}) => <li key={_id}><a href={`/#/ads/${_id}`}>{image, title, desciption, location}</a></li>)} */}
      
      {favs && favs.length && favs.map(item => <li key={item._id}>
                               <a href={`/#/ads/${item._id}`}>
                                   <img src={item.image}></img>
                                   <h2>{item.title}</h2>
                                   <p>{item.price}</p>
                               </a>
        </li>)}
        
    </ul>
    </>
}