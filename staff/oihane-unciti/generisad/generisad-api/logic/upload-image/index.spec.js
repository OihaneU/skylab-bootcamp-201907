
require('dotenv').config()

const { expect } = require('chai')
const uploadImage = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')
const { random } = Math
const fs = require('fs')

const { env: { DB_URL_TEST } } = process

describe('logic - upload image', () => {
    before(() => database.connect(DB_URL_TEST))

    let name, surname, email, password, favorites, image, title, description, price, location, date, id, adId

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@domain.com`
        password = `password-${random()}`
        favorites = []

        await User.deleteMany()
        const user = await User.create({ name, surname, email, password, favorites })
        id = user.id

        title = `TitLe-${random()}`
        description = `description-${Math.random()}`
        price = `price-${Math.random()}`
        location = `location-${Math.random()}`
        date = new Date()

        await Advertisement.deleteMany()
        const ad = await Advertisement.create({ title, description, price, location, date, owner: id })
        adId = ad.id

        image = fs.createReadStream('./test/smiley.png')
    })

    it('should succeed on correct image', async () => {
        const result = await uploadImage(id, adId, image)

        expect(result).not.to.exist

        const ad = await Advertisement.findById(adId)

        expect(ad).to.exist
        expect(ad.image).to.exist
        expect(ad.image).to.have.length.above(0)
        expect(ad.owner.toString()).to.equal(id)
    })

    after(() => database.disconnect())
})