const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (image, title, description, location) {
    // validate fields

    return (async () => {
        const response = await fetch(`${REACT_APP_API_URL}/auth`, {
            method: 'post',
            headers: { 'content-type': 'application/json', authorization: `bearer ${token}` },
            body: JSON.stringify({image, title, description, location })
        })

        if (response.status === 200) {
            const { token } = await response.json()

            return { token }
        }

        const { error } = await response.json()

        throw Error(error)
    })()
}