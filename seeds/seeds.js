const sequelize = require('../config/connection');
const { People, Location, Bags } = require('../models');

const peopleSeedData = require('./peopleSeedData.json');
const tripSeedData = require('./tripSeedData.json');

const seedDatabase = async () => {
  await Bags.drop();
  await sequelize.sync({ force: true });

  const people = await People.bulkCreate(peopleSeedData);

  const locations = await Location.bulkCreate(tripSeedData);

  // Create 10 random trips
  for (let i = 0; i < 10; i++) {
    // Get a random person id
    const { id: randomPersonId } =
      people[Math.floor(Math.random() * people.length)];
    // Get a random location id
    const randomLocationId = locations[Math.floor(Math.random() * locations.length)].id;


    // Create a new trip with random `trip_budget` and `traveller_amount` values, but with ids selected above
    await Bags.create({
      bag_budget: (Math.random() * 10000 + 1000).toFixed(2),
      person_amount: Math.floor(Math.random() * 10) + 1,
      person_id: randomPersonId,
      location_id: randomLocationId
    }).catch((err) => {
      // If there's an error, such as the same random pairing of.id` and `location.id` occurring and we get a constraint error, don't quit the Node process
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();
