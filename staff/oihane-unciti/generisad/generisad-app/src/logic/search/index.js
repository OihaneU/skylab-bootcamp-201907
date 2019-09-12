const REACT_APP_API_URL = process.env.REACT_APP_API_URL


export default function (query)  {

    return(async () => {
        debugger;
        const response = await fetch(`${REACT_APP_API_URL}/ads/search`, {
            method: 'get',
            headers: { 'content-type': 'application/json'}, 
            body: JSON.stringify({query})
        })
    
        const ads = await response.json()
    
        return ads

    })()
}
