
require('dotenv').config()

const { expect } = require('chai')
const deleteAd = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')

const { env: { DB_URL_TEST }} = process

describe('logic - delete ad', () => {
    before(() => database.connect(DB_URL_TEST))

    let image, title, description, price, date, location

    beforeEach(async () => {debugger
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`

        image = `image-${Math.random()}`
        title = `title-${Math.random()}`
        description = `description-${Math.random()}`
        price = `price-${Math.random()}`
        date = new Date()
        location = `location-${Math.random()}`
    

        await User.deleteMany()
            const user = await User.create({ name, surname, email, password })
                userId = user.id
                await Advertisement.deleteMany()
                const ad = await Advertisement.create({ image, title, description, price, location, date, 'owner': userId })
                adId = ad.id

    })

    it('should succeed on correct data', async () => {debugger
        const ad = await deleteAd(adId , userId)
                expect(ad).not.to.exist
    })

   
    after(() => database.disconnect())
})