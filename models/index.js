const Bags = require('./bags');
const Location = require('./location');
const People = require('./people');

// Define associations
People.belongsToMany(Location, {
    through: 'PlannedTrips', // Define the junction table
    as: 'plannedTrips', // Alias for the association
});

Location.belongsToMany(People, {
    through: 'PlannedTrips', // Define the same junction table
    as: 'plannedTravelers', // Alias for the association
});

module.exports = { Bags, People, Location };