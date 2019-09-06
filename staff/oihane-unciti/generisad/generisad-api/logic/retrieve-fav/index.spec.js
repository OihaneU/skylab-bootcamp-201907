
require('dotenv').config()

const { expect } = require('chai')
const retrieveFav = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')
const { random: { number, boolean, value } } = require('generisad-utils')
const { random } = Math

const { env: { DB_URL_TEST }} = process

describe('logic - retrieve user fav', () => {
    before(() => database.connect(DB_URL_TEST))
    //before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))

    let image1, title1, description1, price1, location1, date1, image2, title2, description2, price2, location2, date2 

    beforeEach(async () => { debugger
         name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`

        
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

        debugger
            await User.deleteMany()
                const user = await User.create({ name, surname, email, password })
                    id = user.id
                    await Advertisement.deleteMany()
                const ad1 = await Advertisement.create({ image: image1, title: title1, description: description1, price: price1, location: location1, date: date1 })
                    adId1 = ad1.id

                const ad2 = await Advertisement.create({image: image2, title: title2, description:  description2, price: price2, location: location2, date: date2})
                    adId2 = ad2.id
                    user.favorites.push(adId1)
                    user.favorites.push(adId2)
                    await user.save()
    })

    it('should fail if the user ad does not exist', async () => { 
        try{
            const result = await retrieveFav(id)
                expect(result).to.exist
                expect(result.length).to.equal(2)
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`advertisement with id 5d712e297ea98990acdc78bd does not exist`)
            
        }
    })


    it('should succeed on correct data', async () =>{debugger
        const result = await retrieveFav(id)
                expect(result).to.exist
                expect(result.length).to.equal(2)
    })

    it('should fail on empty user id', () => 
    expect(() => retrieveFav("")).to.throw("userId is empty or blank")
    )

    it('should fail on wrong user id type', () => 
    expect(() => retrieveFav(123)).to.throw('userId with value 123 is not a string')
    )

   
    after(() => database.disconnect())
})