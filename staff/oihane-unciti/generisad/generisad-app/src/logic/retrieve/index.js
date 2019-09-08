const { env: { REACT_APP_API_URL } } = process

const REACT_APP_API_URL = process.env.REACT_APP_API_URL

export default function (id) {

        const response = await fetch(`http://localhost:8080/api/ads/${id}`)

        const ad = await response.json()

        return ad
}