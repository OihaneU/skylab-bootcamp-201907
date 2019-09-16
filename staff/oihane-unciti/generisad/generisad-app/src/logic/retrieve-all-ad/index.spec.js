require('dotenv').config()

import retrieveAllAd from '.'
import { database, models } from 'generisad-data'

const { User, Advertisement } = models

const REACT_APP_DB_URL_TEST = process.env.REACT_APP_DB_URL_TEST

const { random } = Math

fdescribe('logic - retrieve all ads', () => {
    beforeAll(() => database.connect(REACT_APP_DB_URL_TEST))

    let name, surname, email, password, id
    let image1, title1, description1, price1, location1, date1, adId1
    let image2, title2, description2, price2, location2, date2, adId2

    beforeEach(async () => {
        debugger
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@domain.com`
        password = `password-${random()}`

        image1 = `img-${random()}`
        title1 = `TitLe-${random()}`
        description1 = `description-${random()}`
        price1 = `price-${random()}`
        location1 = `location-${random()}`
        date1 = new Date()

        image2 = `img-${random()}`
        title2 = `TitLe-${random()}`
        description2 = `description-${random()}`
        price2 = `price-${random()}`
        location2 = `location-${random()}`
        date2 = new Date()

        await User.deleteMany()
        const user = await User.create({ name, surname, email, password })
        id = user.id

        await Advertisement.deleteMany()

        const ad1 = await Advertisement.create({ image: image1, title: title1, description: description1, price: price1, location: location1, date: date1, owner: id })
        adId1 = ad1.id

        const ad2 = await Advertisement.create({ image: image2, title: title2, description: description2, price: price2, location: location2, date: date2, owner: id })
        adId2 = ad2.id

        debugger
    })

    fit('should succeed on correct data', async () => {
        const ad = await retrieveAllAd()
        debugger
        expect(ad).toBeDefined()
        expect(ad.length).toBeGreaterThanOrEqual(2)
        expect(ad[0]).toBeDefined()
        expect(ad[0].image).toBe(image1)
        expect(ad[0].title).toBe(title1)
        expect(ad[0].description).toBe(description1)
        expect(ad[0].price).toBe(price1)
        expect(ad[0].location).toBe(location1)

        expect(ad[1]).toBeDefined()
        expect(ad[1].image).toBe(image2)
        expect(ad[1].title).toBe(title2)
        expect(ad[1].description).toBe(description2)
        expect(ad[1].price).toBe(price2)
        expect(ad[1].location).toBe(location2)
    })

    afterAll(() => database.disconnect())
})