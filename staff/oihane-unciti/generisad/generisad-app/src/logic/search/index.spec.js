import retrieveUser from '.'
import { database, models } from 'generisad-data'
import jwt from 'jsonwebtoken'

const { User, Advertisement } = models

// const { env: { DB_URL_TEST }} = process // WARN this destructuring doesn't work in react-app :(
const REACT_APP_DB_URL_TEST = process.env.REACT_APP_DB_URL_TEST
const REACT_APP_JWT_SECRET_TEST = process.env.REACT_APP_JWT_SECRET_TEST


describe('logic - search', () => {
    beforeAll(() => database.connect(REACT_APP_DB_URL_TEST))

    let name, surname, email, password, image1, title1, description1, price1, location1, date1, image2, title2, description2, price2, location2, date2, query 

    beforeEach(async () => {

        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`


        image1 = `img-${Math.random()}`
        title1 = `TitLe-${Math.random()}`
        description1 = `description-${Math.random()}`
        price1 = `price-${Math.random()}`
        location1 = `location-${Math.random()}`
        date1 = new Date()

        image2 = `img-${Math.random()}`
        title2 = `TitLe-${Math.random()}`
        description2 = `description-${Math.random()}`
        price2 = `price-${Math.random()}`
        location2 = `location-${Math.random()}`
        date2 = new Date()
    
        await User.deleteMany()
        const user = await User.create({ name, surname, email, password })
            id = user.id
        await Advertisement.deleteMany()

            const product1 = await Advertisement.create({ image: image1, title: title1, description: description1, price: price1, location: location1, date: date1, owner:id }) 
            product1Id= product1.id
            const product2 = await Advertisement.create({image: image2, title: title2, description:  description2, price: price2, location: location2, date: date2, owner:id})
            product2Id= product2.id
    })
    it('should succeed on correct data', async () =>{
        query = "title"
        const result = await searchAd(query)
                expect(result[0]).query = "title"
        const ad = await searchAd(query)
                expect(ad[0]).toBeDefined()
                expect(ad[0].image).toBe(image1)
                expect(ad[0].title).toBe(title1)
                expect(ad[0].description).toBe(description1)
                expect(ad[0].price).toBe(price1)
                expect(ad[0].location).toBe(location1)

                expect(ad[1]).to.exist
                expect(ad[1].image).toBe(image2)
                expect(ad[1].title).toBe(title2)
                expect(ad[1].description).toBe(description2)
                expect(ad[1].price).toBe(price2)
                expect(ad[1].location).toBe(location2)
    })

    afterAll(() => database.disconnect())
})
