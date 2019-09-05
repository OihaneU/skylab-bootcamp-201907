
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
        const idAdvertisement = await registerAd(image, title, description, price, location, date, id)
        const result = await Advertisement.findById(idAdvertisement) 

            expect(result).to.exist
            expect(result.id).to.equal(idAdvertisement)
            expect(result.image).to.equal(image)
            expect(result.title).to.equal(title)
            expect(result.description).to.equal(description)
            expect(result.price).to.equal(price)
            expect(result.location).to.equal(location)
            expect(result.date).to.deep.equal(date)
            debugger
            expect(result.owner.toString()).to.equal(id)
    })

   /*  it('should fail on empty image', () =>
        expect(() =>
            registerAd(id, '', model, year, type, color, electric, plate)
        ).to.throw('image is empty or blank')
    )

    it('should fail on undefined image', () =>
        expect(() =>
            registerAd(id, undefined,title, description, location)
        ).to.throw(`image with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(id, 123, title, description, location)
        ).to.throw(`image with value 123 is not a string`)
    )

    it('should fail on empty title', () =>
        expect(() =>
            registerAd(id, image, "", description, location)
        ).to.throw('title is empty or blank')
    )

    it('should fail on undefined title', () =>
        expect(() =>
            registerAd(id, image, undefined, description, location)
        ).to.throw(`title with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(id, image, 123, description, location)
        ).to.throw(`title with value 123 is not a string`)
    )

    it('should fail on empty description', () =>
        expect(() =>
            registerAd(image, title, "", location)
        ).to.throw(`year with value  is not a description`)
    )

    it('should fail on undefined description', () =>
        expect(() =>
            registerAd(id, image, title, undefined, location)
        ).to.throw(`description with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(id, image, title, 123, location)
        ).to.throw(`title with value 123 is not a string`)
    )

    it('should fail on empty location', () =>
        expect(() =>
            registerAd(image, title, description, "")
        ).to.throw(`year with value  is not a location`)
    )

    it('should fail on undefined location', () =>
        expect(() =>
            registerAd(id, image, title, description, undefined)
        ).to.throw(`location with value undefined is not a string`)
    )

    it('should fail on wrong data type', () =>
        expect(() =>
            registerAd(id, image, title, description, 123)
    ).to.throw(`location with value 123 is not a string`)

    ) */
   
    after(() => database.disconnect())
})