import React, { useState, useEffect } from 'react'
import logic from '../../logic'

export default function ({ id }) {
    const [ad, setAd] = useState()

    useEffect(() => {
        (async () => {
            const ad = await logic.retrieveAd(id)

            setAd(ad)
        })()
    }, [])

    return <section>
        {ad && <>
            <h2>{ad.title}</h2>
            <span>{ad.price}</span>
        </>}
    </section>
}