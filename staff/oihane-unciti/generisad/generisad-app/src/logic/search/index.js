
const REACT_APP_API_URL = process.env.REACT_APP_API_URL


function searchAds (query)  {

    return(async () => {

        const response = await fetch(`${REACT_APP_API_URL}/ads/search}`, {
            method: 'GET',
            headers: { 'authorization': `bearer ${token}` }, 
            body: JSON.stringify({query })
        })
    
        const ads = await response.json()
    
        return ads

    })()
}
export default searchAds