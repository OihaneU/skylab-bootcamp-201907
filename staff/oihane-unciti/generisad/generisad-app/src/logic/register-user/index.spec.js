import registerUser from '.'
const { random } = Math
const { database, models: { User } } = require('generisad-data')

const REACT_APP_DB_URL_TEST = process.env.REACT_APP_DB_URL_TEST

describe('logic - register user', () => {
    let name, surname, email, password

    beforeAll(() => database.connect(REACT_APP_DB_URL_TEST))


    beforeEach(() => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@mail.com`
        password = `password-${random()}`
      
    })

    it('should succeed on correct data', async () => {
        const response = await registerUser(name, surname, email, password)

        expect(response).toBeUndefined()
    })
})