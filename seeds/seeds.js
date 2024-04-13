const sequelize = require("../config/connection");
const { People, Location, Bags } = require("../models");

const peopleSeedData = require("./peopleSeedData.json");
const tripSeedData = require("./tripSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const people = await People.bulkCreate(peopleSeedData);
  const locations = await Location.bulkCreate(tripSeedData);

  // Create 10 random trips
  for (let i = 0; i < 10; i++) {
    // Get a random person id
    const randomPerson = people[Math.floor(Math.random() * people.length)];
    const randomPersonId = randomPerson.id;

    // Get a random location id
    const randomLocation =
      locations[Math.floor(Math.random() * locations.length)];

    // Create a bag cost with the random person id and random location id
    await Bags.create({
      bag_cost: (Math.random() * 1000 + 1000).toFixed(2),
    }).catch((err) => {
      //if there persist and error then we will get a constraint error, node does not quit
      console.log(err);
    });
    process.exit(0);
  }
};
seedDatabase();
