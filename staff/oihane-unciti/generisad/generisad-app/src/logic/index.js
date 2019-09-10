import registerUser from './register-user'
import authenticateUser from './authenticate-user'
import searchAds from './search'

//import authenticateUser from './authenticate-user'
//import retrieveUser from './retrieve-user'
export default {
    set userCredentials(token){
        sessionStorage.token = token
    },
    get userCredentials(){
        return sessionStorage.token
    },
    isUserLogged(){
        return !!this.userCredentials
    },
    
    registerUser,
    authenticateUser,
    searchAds
}



// export default {
//     async searchDucks(query) {
//         const response = await fetch(`https://duckling-api.herokuapp.com/api/search?q=${query}`)

//         const ducks = await response.json()

//         return ducks
//     },

//     async retrieveDuck(id) {
//         const response = await fetch(`https://duckling-api.herokuapp.com/api/ducks/${id}`)

//         const duck = await response.json()

//         return duck
//     }
// }