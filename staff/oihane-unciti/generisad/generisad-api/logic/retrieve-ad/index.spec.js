
require('dotenv').config()

const { expect } = require('chai')
const retrieveAd = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')
const { random: { number, boolean, value } } = require('generisad-utils')
const { random } = Math

const { env: { DB_URL_TEST }} = process

describe.only('logic - retrieve ad detail', () => {
    before(() => database.connect(DB_URL_TEST))
    //before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))

    let image1, title1, description1, price1, location1, date1, image2, title2, description2, price2, location2, date2 

    beforeEach(async () => { debugger
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
        const ad1 = await Advertisement.create({ image: image1, title: title1, description: description1, price: price1, location: location1, date: date1 })
            adId1 = ad1.id

        const ad2 = await Advertisement.create({image: image2, title: title2, description:  description2, price: price2, location: location2, date: date2})
            adId2 = ad2.id
    })


    it('should succeed on correct data', async () =>{debugger
        const ad = await retrieveAd(adId1)
                expect(ad).to.exist
                expect(ad.image).to.equal(image1)
                expect(ad.title).to.equal(title1)
                expect(ad.description).to.equal(description1)
                expect(ad.price).to.equal(price1)
                expect(ad.location).to.equal(location1)

    })
    it('should fail on wrong vehicle id', async () => {
        try {
            await logic.retrieveVehicle('5d5d5530531d455f75da9fF9')
        }catch({ message }) {
            expect(message).to.equal('Vehicle with id 5d5d5530531d455f75da9fF9 does not exist.')
        }
    })

    it('should fail on empty vehicle id', () => 
        expect(() => logic.retrieveVehicle("")).to.throw('Vehicle id is empty or blank')
    )
    
    it('should fail on wrong vehicle id type', () => 
        expect(() => logic.retrieveVehicle(123)).to.throw('Vehicle id with value 123 is not a string')
    )
   
   
    after(() => database.disconnect())
})