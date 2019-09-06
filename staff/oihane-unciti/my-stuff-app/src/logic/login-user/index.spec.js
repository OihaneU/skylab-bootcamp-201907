import authenticateUser from '.'
import { async } from 'q';

const { random } = Math

describe('logic - register user', () => {
    let  email, password

    beforeEach(async () => { debugger

        email = `email-${random()}@mail.com`
        password = `password-${random()}`
        
    })

    it('should succeed on correct data', async () => {
        const response = await authenticateUser(email, password)

        expect(response).toBeUndefined()
    })
})