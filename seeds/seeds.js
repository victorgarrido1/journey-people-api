const sequelize = require('../config/connection');
const  { People, Location, Bags } = require('../models')

const peopleSeedData = require('./peopleSeedData.json');
const tripSeedData = require('./tripSeedData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true});

const people = await People.bulkCreate(peopleSeedData);

const locations = await Location.bulkCreate(tripSeedData);


//we create locations at random
for (let i = 0; i < 10; i++) {
    //
}
}

