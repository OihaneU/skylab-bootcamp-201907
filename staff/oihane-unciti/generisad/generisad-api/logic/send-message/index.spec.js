// require('dotenv').config()

// const { expect } = require('chai')
// const registerAd = require('.')
// const { database, models: { User, Advertisement } } = require('generisad-data')

// const { env: { DB_URL_TEST }} = process

// describe('logic - register ad', () => {
//     before(() => database.connect(DB_URL_TEST))
//     //before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))
//     let image, title, description, price, location, date

//     beforeEach(async () => {debugger
//         image = `image-${Math.random()}`
//         title = `title-${Math.random()}`
//         description = `description-${Math.random()}`
//         price = `price-${Math.random()}`
//         location = `location-${Math.random()}`
//         date = new Date()

//         await Advertisement.deleteMany()
//         name = `name-${Math.random()}`
//         surname = `surname-${Math.random()}`
//         email = `email-${Math.random()}@email.com`
//         password = `123-${Math.random()}`

//         await User.deleteMany()
//             const user = await User.create({ name, surname, email, password })
//                 id = user.id
//     })

//     it('should succeed on correct data', async () =>{debugger
//         const idAdvertisement = await registerAd(image, title, description, price, location, id)
//         const result = await Advertisement.findById(idAdvertisement) 

//             expect(result).to.exist
//             expect(result.id).to.equal(idAdvertisement)
//             expect(result.image).to.equal(image)
//             expect(result.title).to.equal(title)
//             expect(result.description).to.equal(description)
//             expect(result.price).to.equal(price)
//             expect(result.location).to.equal(location)
//             //expect(result.date).to.deep.equal(date)
//             expect(result.owner.toString()).to.equal(id)
//     })
