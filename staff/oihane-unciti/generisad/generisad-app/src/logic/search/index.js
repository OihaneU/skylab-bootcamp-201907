const REACT_APP_API_URL = process.env.REACT_APP_API_URL


export default function (query)  {

    return(async () => {
        debugger;
        const response = await fetch(`${REACT_APP_API_URL}/search?query=${query}`, {
            method: 'get',
            headers: { 'content-type': 'application/json'}, 
           
        })

        if (response.status !== 200) {
            const { error } = await response.json()

            debugger

            throw Error(error)
        }

    
        const ads = await response.json()
    
        return ads.ad

    })()
}
