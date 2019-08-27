const { expect } = require('chai')
const logic = require('..')
const { Vehicle } = require('../../data')
const mongoose = require('mongoose')
let DateGenerator = require('random-date-generator');
var randomBool = require('random-bool');

describe('logic - register vehicle', () => {
    before(() => mongoose.connect('mongodb://localhost/my-api-test', { useNewUrlParser: true }))

    let branch, model, year, type, color, electric, licence, owner

    beforeEach(() => {
        branch = `branch-${Math.random()}`
        model = `model-${Math.random()}`
        type = `type-${Math.random()}`
        color= `color-${Math.random()}`
        year = DateGenerator.getRandomDate();
        electric = electric.randomBool(); 
        owner = `íd-${Math.random()}`
        return Vehicle.deleteMany()
    })

    it('should succeed on correct data', () =>
        logic.registerVehicle(branch, model, year, type, color, electric, licence, owner)
            .then(result => {
                expect(result).not.to.exist

                return User.findOne({ licence })
            })
            .then(vehicle => {
                expect(vehicle).to.exist
                expect(vehicle.branch).to.equal(branch)
                expect(vehicle.model).to.equal(model)
                expect(vehicle.year).to.equal(year)
                expect(vehicle.type).to.equal(type)
                expect(vehicle.color).to.equal(color)
                expect(vehicle.electric).to.equal(electric)
                expect(vehicle.licence).to.equal(licence)
            })
    )

    after(() => mongoose.disconnect())
})