require('dotenv').config()

const { expect } = require('chai')
const retrieveUserMessage = require('.')
const { database, models: { User, Advertisement, Mail } } = require('generisad-data')

const { env: { DB_URL_TEST }} = process

describe('logic - retreive message', () => {
    before(() => database.connect(DB_URL_TEST))

    let  title1, body1,image, description, price, location, date, name, surname, email, password, titleAd

    beforeEach(async () => {

        await Mail.deleteMany()
        title1 =`titlemessage-${Math.random()}`
        body1 = `msg-${Math.random()}`

        title =`titlemessage-${Math.random()}`
        body = `msg-${Math.random()}`

        image = `image-${Math.random()}`
        titleAd = `title-${Math.random()}`
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
            
            const userSend = await User.create({ name, surname, email, password })
                idSend = userSend.id
       
        await Advertisement.deleteMany()
            const ad = await Advertisement.create({ image, title:titleAd, description, price, location, date, owner: id })
            adId = ad.id
        
        await Mail.deleteMany()
            const mail = await Mail.create({ sender: idSend, receiver: id, date, title:title1, body:body1, advertisement: adId })
            mailId = mail.id

    })

    it('should succeed on correct data', async () =>{
        const message = await retrieveUserMessage(id)
            expect(message).to.exist
            expect(message.length).to.equal(1)
    })

    it('should fail if there are not id', async () =>{ 
        try{
            await retrieveUserMessage('5d7204963b3ea6a2f0c7a6a2')
        }catch(error) {
                expect(error).to.exist
                expect(error.message).to.equal(`user with id 5d7204963b3ea6a2f0c7a6a2 not found`)
            }
    })

    it('should fail on wrong ad id type', () => 
    expect(() => retrieveUserMessage(123)).to.throw(`userId with value 123 is not a string`)
    )
    it('should fail on wrong ad id type', () => 
    expect(() => retrieveUserMessage(undefined)).to.throw(`userId with value undefined is not a string`)
)
    it('should fail on empty or blank', () => 
    expect(() => retrieveUserMessage(" ")).to.throw(`userId is empty or blank`)
    )
   
   
    after(() => database.disconnect())
})