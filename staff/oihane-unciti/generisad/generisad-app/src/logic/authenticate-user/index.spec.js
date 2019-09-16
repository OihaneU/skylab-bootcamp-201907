import logic from '..'
const REACT_APP_API_URL = process.env.REACT_APP_API_URL

const {random} = Math

describe('logic-authenticate user', ()=>{
    let name, surname, email, password
    beforeEach(()=>{
        sessionStorage.clear()
        name= `name-${random()}`
        surname= `surname-${random()}`
        email= `email-${random()}@mail.com`
        password= `password-${random()}`
        
        return (async () => {
            const response = await fetch(`${REACT_APP_API_URL}/users`, {
                method: 'post',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ name, surname, email, password })
            })
            // const {email: email2, password: password2} = response
            
            await fetch(`${REACT_APP_API_URL}/auth`, {
                method: 'post', 
                headers: {'content-type':'application/json'},
                body: JSON.stringify ({email, password})
            })
    })()
})
    it('should succeed on correct data', async () => {
        
         const resp = await logic.authenticateUser(email, password)
       
        expect(resp).toBeUndefined()

        expect(logic.userCredentials).toBeDefined()
    })

   
})
