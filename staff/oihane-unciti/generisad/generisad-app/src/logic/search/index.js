const { env: { REACT_APP_API_URL } } = process

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (query) {
    //validate.toString(query, "query")
    const ads 
    const response = await fetch(`http://localhost:8080/api/ads/search${query}`)

    if(!reponse) ads=[]
    else  ads = await response.json()

    return ads
}
