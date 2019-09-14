import React, { useState, useEffect } from 'react'

import logic from '../../logic'

import { withRouter, Link } from 'react-router-dom'

function Detail({ history, id }) {
    const [ad, setAd] = useState()
    const [favorites, setFavorites] = useState()
    const [error, setError] = useState()

    // function handleMessage() {

    //     if (logic.isUserLoggedIn()) {


    //         history.push('/send')
    //     }
    //     else {
    //         history.push('/auth')
    //     }

    // }

    /*    function handleFav () {
 
         if (logic.isUserLoggedIn()){
             
             onFavorites()
         }
         else{
             history.push('/auth')
         }
        
       }
  */
    async function handleFav() {
        if (!logic.isUserLoggedIn()) {
            history.push('/auth')
        } else {
            try {
                
                const favs = await logic.retrieveFavorites()

                const fav = favs.favorites.find( ({ _id }) => _id === id )
                await logic.favorite(id)

                if(fav){
                    setFavorites(null)
                }else{
                    setFavorites(id)
                }

            } catch (error) {
                console.log(error.message)

            }
        }
    }

    useEffect(() => {
        (async () => {

            try {
                const _ad = await logic.detail(id)
                setAd(_ad)
                const favs = await logic.retrieveFavorites()
                const fav = favs.favorites.find( ({ _id }) => _id === id )

                if(fav){
                    setFavorites(fav._id)
                }else{
                    setFavorites(null)
                }
                
            } catch (error) {
                setError("No esta disponible este anuncio")
            }
        })()
    }, [])



    return <section>
        {ad && <>
            <img src={ad.image}></img>
            <h2>{ad.title}</h2>
            <p>{ad.description}</p>
            <p>{ad.price}</p>
            <p>{ad.location}</p>

            <Link to={`/send/${id}`} >Contacta</Link>
            {favorites ?
                <button onClick={() => handleFav(ad._id)}>Quitar</button>
                :
                <button onClick={() => handleFav(ad._id)}>Favorites</button>
            }

        </>}
    </section>
}

export default withRouter(Detail)