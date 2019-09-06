
require('dotenv').config()

const { expect } = require('chai')
const toggleUserFav = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')
const { random } = Math

const { env: { DB_URL_TEST }} = process

describe('logic - toggle fav', () => {
    before(() => database.connect(DB_URL_TEST))
    //before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))

    let name, surname, email, password, favorites, image, title, description, price, location, date

    beforeEach(async () => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`
        favorites= []

        image = `img-${Math.random()}`
        title = `TitLe-${random()}`
        description = `description-${Math.random()}`
        price = `price-${Math.random()}`
        location = `location-${Math.random()}`
        date = new Date()

        await User.deleteMany()
        const user = await User.create({ name, surname, email, password, favorites })
        id = user.id
        await Advertisement.deleteMany()
        const ad = await Advertisement.create({ image, title, description, price, location, date })
        adId = ad.id
    })

    it('should succeed on correct push', async () =>{
        const result = await toggleUserFav(id, adId)
            expect(result).to.exist
            expect(result.length).to.equal(1) 
            expect(result[0].toString()).to.equal(adId)


    })



    it('should succeed on correct delete', async () =>{
        const user = await User.findById(id)
        user.favorites.push(adId)
        await user.save()
        
        const result = await toggleUserFav(id, adId)
        expect(result).to.exist
        expect(result.length).to.equal(0) 
    })  
    it('should fail if the advertisement ad does not exist', async () => { 
        try{
            await toggleUserFav(id, "5d712e297ea98990acdc78bd")
            const ad = await Advertisement.findById(adId)
            expect(ad).to.be.null
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`advertisement with id 5d712e297ea98990acdc78bd does not exist`)
            
        }
    })
   

    it("should fail on unexisting user" , async () => {debugger
        
        try{debugger
            await toggleUserFav( "5d717e463a7bd156f0294270", adId )
            const ad = await Advertisement.findById(adId)
            expect(ad).to.be.null
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`user with id 5d717e463a7bd156f0294270 is not found `)
        }
            
    })
    it('should fail on empty user id', () => 
        expect(() => toggleUserFav("", adId)).to.throw("userId is empty or blank")
    )
    
    it('should fail on wrong user id type', () => 
        expect(() => toggleUserFav(123, adId)).to.throw('userId with value 123 is not a string')
    )
    
    it('should fail on empty ad id', () => 
        expect(() => toggleUserFav(id, "" )).to.throw('adId is empty or blank')
    )
    
    it('should fail on wrong ad id type', () => 
        expect(() => toggleUserFav( id, 123)).to.throw('adId with value 123 is not a string')
    )


    
     

    //         const user = await User.findOne({ email })
    //             expect(user).to.exist
    //             expect(user.name).to.equal(name)
    //             expect(user.surname).to.equal(surname)
    //             expect(user.email).to.equal(email)
    //             expect(user.password).to.equal(password)
    //             expect(user.favorites.length).to.equal(0)
    // })


    // it('should fail if the mail already exists', async () => {
    //     await User.create({ name, surname, email, password, favorites })
    //         try{
    //             await registerUser(name, surname, email, password, favorites)
    //             throw new Error('should not reach this point')
    //         }catch(error) {
    //                 expect(error).to.exist
    //                 expect(error.message).to.equal(`user with e-mail ${email} already exists`)
    //             }
    // })

    // it('should fail on empty name', () =>
    //     expect(() => registerUser("", surname, email, password, favorites)).to.throw('name is empty or blank')
    // )

    // it('should fail on wrong name type', () =>
    //     expect(() => registerUser(123, surname, email, password, favorites)).to.throw('name with value 123 is not a string')
    // )

    // it('should fail on empty surname', () =>
    //     expect(() => registerUser(name, "", email, password, favorites)).to.throw('surname is empty or blank')
    // )

    // it('should fail on wrong surname type', () =>
    //     expect(() => registerUser(name, 123, email, password, favorites)).to.throw('surname with value 123 is not a string')
    // )

    // it('should fail on empty email', () =>
    //     expect(() => registerUser(name, surname, "123@mailcom", password, favorites)).to.throw('email with value 123@mailcom is not a valid e-mail')
    // )

    // it('should fail on wrong email format', () =>
    //     expect(() => registerUser(name, surname, "123@mailcom", password, favorites)).to.throw('email with value 123@mailcom is not a valid e-mail')
    // )

    // it('should fail on wrong email type', () =>
    //     expect(() => registerUser(name, surname, 123, password, favorites)).to.throw('email with value 123 is not a string')
    // )

    // it('should fail on empty password', () =>
    //     expect(() => registerUser(name, surname, email, "", favorites)).to.throw('password is empty or blank')
    // )

    // it('should fail on wrong password type', () =>
    //     expect(() => registerUser(name, surname, email, 123, favorites)).to.throw('password with value 123 is not a string')
    // )
    after(() => database.disconnect())
})