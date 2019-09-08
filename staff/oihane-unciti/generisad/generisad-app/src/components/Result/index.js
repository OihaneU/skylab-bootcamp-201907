import React, { useState, useEffect } from 'react'
import logic from '../../logic/result'

export default function ({ query }) {
    const [ads, setAds] = useState()

    useEffect(() => {
        (async () => {
            const ads = await logic.searchAds(query)

            setAds(ads)
        })()
    }, [query])

    return <ul>
        {ads && ads.length && ads.map(({id, image, title, desciption, location}) => <li><a href={`/#/ads/${id}`}>{image, title, desciption, location}</a></li>)}
    </ul>
}