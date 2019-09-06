
require('dotenv').config()

const { expect } = require('chai')
const registerAd = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')

const { env: { DB_URL_TEST }} = process

describe('logic - register ad', () => {
    before(() => database.connect(DB_URL_TEST))
    //before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))
    let image, title, description, price, location, date

    beforeEach(async () => {debugger
        image = `image-${Math.random()}`
        title = `title-${Math.random()}`
        description = `description-${Math.random()}`
        price = `price-${Math.random()}`
        location = `location-${Math.random()}`
        date = new Date()

        await Advertisement.deleteMany()
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@email.com`
        password = `123-${Math.random()}`

        await User.deleteMany()
            const user = await User.create({ name, surname, email, password })
                id = user.id
    })

    it('should succeed on correct data', async () =>{debugger
        const idAdvertisement = await registerAd(image, title, description, price, location, id)
        const result = await Advertisement.findById(idAdvertisement) 

            expect(result).to.exist
            expect(result.id).to.equal(idAdvertisement)
            expect(result.image).to.equal(image)
            expect(result.title).to.equal(title)
            expect(result.description).to.equal(description)
            expect(result.price).to.equal(price)
            expect(result.location).to.equal(location)
            //expect(result.date).to.deep.equal(date)
            expect(result.owner.toString()).to.equal(id)
    })

    it('should fail on empty image', () =>
        expect(() =>
            registerAd('',title, description, price, location)
        ).to.throw('image is empty or blank')
    )

    it('should fail on undefined image', () =>
        expect(() =>
            registerAd(undefined, title, description, price, location)
        ).to.throw(`image with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(123, title, description, price, location)
        ).to.throw(`image with value 123 is not a string`)
    )

    it('should fail on empty title', () =>
        expect(() =>
            registerAd( image, "", description, price, location)
        ).to.throw('title is empty or blank')
    )

    it('should fail on undefined title', () =>
        expect(() =>
            registerAd(image, undefined, description, price, location)
        ).to.throw(`title with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(image, 123, description, price, location)
        ).to.throw(`title with value 123 is not a string`)
    )

    it('should fail on empty description', () =>
        expect(() =>
            registerAd( image, title, "", price, location )
        ).to.throw(`description is empty or blank`)
    )

    it('should fail on undefined description', () =>
        expect(() =>
            registerAd( image, title, undefined, price, location)
        ).to.throw(`description with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(image, title, 123, price, location)
        ).to.throw(`description with value 123 is not a string`)
    )

    it('should fail on empty price', () =>
        expect(() =>
            registerAd(image, title, description, "", location)
        ).to.throw(`price is empty or blank`)
    )

    it('should fail on undefined price', () =>
        expect(() =>
            registerAd( image, title, description, undefined, location,)
        ).to.throw(`price with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(image, title, description, 123, location)
        ).to.throw(`price with value 123 is not a string`)
    )

    it('should fail on empty location', () =>
        expect(() =>
            registerAd(image, title, description, price, "")
        ).to.throw(`location is empty or blank`)
    )

    it('should fail on undefined location', () =>
        expect(() =>
            registerAd( image, title, description, price, undefined)
        ).to.throw(`location with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(image, title, description, price,  123)
    ).to.throw(`location with value 123 is not a string`)

    )
   
    after(() => database.disconnect())
})