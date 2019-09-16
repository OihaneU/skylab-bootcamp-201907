
import logic from '..'

import { database, models } from 'generisad-data'
const jwt = require('jsonwebtoken') 

const { User, Advertisement } = models

const REACT_APP_DB_URL_TEST = process.env.REACT_APP_DB_URL_TEST
const REACT_APP_JWT_SECRET_TEST = process.env.REACT_APP_JWT_SECRET_TEST

const { random } = Math

describe('logic - delete ad', () => {debugger
    beforeAll(() => database.connect(REACT_APP_DB_URL_TEST))
    let name, surname, email, password, userId
    let image, title, description, price, date, location, adId
    let token

    beforeEach(async () => {
        name = `name-${random()}`
        surname = `surname-${random()}`
        email = `email-${random()}@domain.com`
        password = `password-${random()}`

        image = `image-${random()}`
        title = `title-${random()}`
        description = `description-${random()}`
        price = `price-${random()}`
        date = new Date()
        location = `location-${random()}`


        await User.deleteMany()
        const user = await User.create({ name, surname, email, password })
        userId = user.id

        const token = jwt.sign({ sub: userId }, REACT_APP_JWT_SECRET_TEST)
        logic.userCredentials = token
        
        await Advertisement.deleteMany()
        const ad = await Advertisement.create({ image, title, description, price, location, date, 'owner': userId })
        adId = ad.id

    })

    it('should succeed on correct data', async () => {
        await deleteAd(userId, adId)
        try {
            const ad = await Advertisement.findById(adId)
            expect(ad).toBeUndefined()
        } catch (error) {
            throw Error("should not reach this point")
        }

    })
    it('should fail if the user ad does not exist', async () => {
        try {
            await logic.deleteAd(userId, "5d712e297ea98990acdc78bd")
            const ad = await Advertisement.findById(adId)
            expect(ad).toBeUndefined()
        } catch (error) {
            debugger
            expect(error).toBeDefined()
            expect(error.message).toBe(`advertisement with id 5d712e297ea98990acdc78bd does not exist`)

        }
    })


    // it("should fail on unexisting user" , async () => {

    //     try{
    //         await deleteAd( "5d712e2v7ea98990acdc78bd", adId )
    //         const ad = await Advertisement.findById(adId)
    //         expect(ad).toBeUndefined()
    //     }catch(error){
    //         expect(error).tobeDefined()
    //         expect(error.message).toBe(`user with id 5d712e2v7ea98990acdc78bd is not owner of advertisement with id ${adId}`)
    //     }

    // })
    // it('should fail on empty user id', () => 
    //     expect(() => deleteAd("", adId)).to.throw('user id is empty or blank')
    // )

    // it('should fail on wrong user id type', () => 
    //     expect(() => deleteAd( 123, adId)).to.throw('user id with value 123 is not a string')
    // )

    // it('should fail on empty ad id', () => 
    //     expect(() => deleteAd(userId, "" )).to.throw('id is empty or blank')
    // )

    // it('should fail on wrong ad id type', () => 
    //     expect(() => deleteAd( userId, 123 )).to.throw('id with value 123 is not a string')
    // )


    afterAll(() => database.disconnect())
})