import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { withRouter } from 'react-router-dom'
import logic from '../../logic'

import Search from "../Search"

function Results ({ history }) {
    const [ads, setAds] = useState([])

    /*    useEffect(() => {
           (async () => {
               const _ads = await logic.search(query)
   
               setAds(_ads)
           })()
       }, [query]) */

    useEffect(() => {
        async function search() {
            try{
                const { query } = queryString.parse(history.location.search)
                
    
                const _ads = await logic.search(query)
                
                setAds(_ads)
            }
            catch(error){
                setAds([])
            }
        }
        search()
    }, [history.location])

    return <>

        <Search />
        <ul>
            {/* {ads && ads.length && ads.map(({_id, image, title, desciption, location}) => <li key={_id}><a href={`/#/ads/${_id}`}>{image, title, desciption, location}</a></li>)} */}
            {ads.length ? ads.map(item => <li key={item._id}>
                <a href={`/#/ads/${item._id}`}>
                    <img src={item.image}></img>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                    <p>{item.location}</p>
                </a>
            </li>): <p>No hay resultados</p>}
        </ul>
    </>
}

export default withRouter(Results)