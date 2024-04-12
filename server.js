const express = require('express'); // Import the Express framework
const routes = require('./routes'); // Import your routes
const { Sequelize } = require('sequelize'); // Import Sequelize
const sequelize = require('./config/connection'); // Assuming this file configures Sequelize

const app = express(); // Create an instance of Express
const PORT = process.env.PORT || 3001; // Set the port number

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// Turn on routes by using the imported router object
app.use(routes);



// Test database connection
(async () => {
  try {
    await sequelize.authenticate(); // Authenticate with the database
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Sync database models with the database
sequelize.sync({ force: false }).then(() => {
  // Start the server once synchronization is complete
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});

// If you have defined models, include them in the sync method
// Example: sequelize.sync({ force: false, models: [YourModel1, YourModel2] }).then(...)