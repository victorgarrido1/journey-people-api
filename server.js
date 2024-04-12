const express = require('express');
const routes = require('./routes');
const { Sequelize } = require('sequelize');
const sequelize = require('./config/connection'); // Assuming this file configures Sequelize

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on routes
app.use(routes);

// Optionally configure logging for Sequelize
// const sequelize = new Sequelize('sqlite::memory:', {
//   logging: console.log, // or false to disable logging
// });

// Test database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// Sync database models
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening on port', PORT));
});

// If you have defined models, include them in the sync method
// Example: sequelize.sync({ force: false, models: [YourModel1, YourModel2] }).then(...)