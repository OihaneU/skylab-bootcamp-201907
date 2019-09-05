require('dotenv').config()
const { expect } = require('chai')
const searchAdQuery = require('.')
const { database, models: { Advertisement } } = require('generisad-data')
const { random: { number, boolean, value } } = require('generisad-utils')
const { random } = Math

const { env: { DB_URL_TEST }} = process


describe('logic - search ads', () => {debugger
    before(() => database.connect(DB_URL_TEST))

    let image1, title1, description1, price1, location1, date1, image2, title2, description2, price2, location2, date2, query 

    beforeEach(async () => {
        image1 = `img-${Math.random()}`
        title1 = `TitLe-${random()}`
        description1 = `description-${Math.random()}`
        price1 = `price-${Math.random()}`
        location1 = `location-${Math.random()}`
        date1 = new Date()

        image2 = `img-${Math.random()}`
        title2 = `TitLe-${random()}`
        description2 = `description-${Math.random()}`
        price2 = `price-${Math.random()}`
        location2 = `location-${Math.random()}`
        date2 = new Date()
    

        await Advertisement.deleteMany()
            const product1 = await Advertisement.create({ image: image1, title: title1, description: description1, price: price1, location: location1, date: date1 }) 
            product1Id= product1.id
            const product2 = await Advertisement.create({image: image2, title: title2, description:  description2, price: price2, location: location2, date: date2})
            product2Id= product2.id
    })

    it('should succeed on correct data', async () =>{
        query = "title"
        const ad = await searchAdQuery(query)
                expect(ad[0]).to.exist
                expect(ad[0].image).to.equal(image1)
                expect(ad[0].title).to.equal(title1)
                expect(ad[0].description).to.equal(description1)
                expect(ad[0].price).to.equal(price1)
                expect(ad[0].location).to.equal(location1)

                expect(ad[1]).to.exist
                expect(ad[1].image).to.equal(image2)
                expect(ad[1].title).to.equal(title2)
                expect(ad[1].description).to.equal(description2)
                expect(ad[1].price).to.equal(price2)
                expect(ad[1].location).to.equal(location2)
    })
   
    after(() => database.disconnect())
})