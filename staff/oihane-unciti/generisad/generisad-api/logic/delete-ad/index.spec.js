
require('dotenv').config()

const { expect } = require('chai')
const deleteAd = require('.')
const { database, models: { User, Advertisement } } = require('generisad-data')

const { env: { DB_URL_TEST }} = process

describe.only('logic - delete ad', () => {
    before(() => database.connect(DB_URL_TEST))

    let image, title, description, price, date, location

    beforeEach(async () => {
        name = `name-${Math.random()}`
        surname = `surname-${Math.random()}`
        email = `email-${Math.random()}@domain.com`
        password = `password-${Math.random()}`

        image = `image-${Math.random()}`
        title = `title-${Math.random()}`
        description = `description-${Math.random()}`
        price = `price-${Math.random()}`
        date = new Date()
        location = `location-${Math.random()}`
    

        await User.deleteMany()
            const user = await User.create({ name, surname, email, password })
                userId = user.id
                await Advertisement.deleteMany()
                const ad = await Advertisement.create({ image, title, description, price, location, date, 'owner': userId })
                adId = ad.id

    })

    it('should succeed on correct data', async () => { 
        await deleteAd(adId , userId)
        try{
            const ad = await Advertisement.findById(adId)
            expect(ad).to.be.null
        }catch(error){
            throw Error("should not reach this point")
        }
                
    })
    it('should fail if the user ad does not exist', async () => { debugger
        try{
            await deleteAd("5d712e297ea98990acdc78bd" , userId)
            const ad = await Advertisement.findById(adId)
            expect(ad).to.be.null
        }catch(error){
            expect(error).to.exist
            expect(error.message).to.equal(`advertisement with id 5d712e297ea98990acdc78bd does not exist`)
            
        }
    })
   

    // it("should fail on unexisting user" , async () => {
    //     await deleteAd(adId , "1111111")
    //     try{
    //         const ad = await Advertisement.findById(adId)
    //         expect(ad).to.be.null
    //     }catch(error){
    //         throw Error("should not reach this point")
    //     }
            

    it('should fail on empty user id', () => 
        expect(() => deleteAd(adId , "")).to.throw('user id is empty or blank')
    )
    
    it('should fail on wrong user id type', () => 
        expect(() => deleteAd(adId , 123)).to.throw('user id with value 123 is not a string')
    )
    
    it('should fail on empty ad id', () => 
        expect(() => deleteAd("" , userId)).to.throw('id is empty or blank')
    )
    
    it('should fail on wrong ad id type', () => 
        expect(() => deleteAd(123 , userId)).to.throw('id with value 123 is not a string')
    )

   
    after(() => database.disconnect())
})