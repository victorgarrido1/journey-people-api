const { Model, DataTypes } = require('sequelize'); // Import necessary modules
const sequelize = require('../config/connection'); // Assuming this file correctly configures Sequelize

class Bags extends Model {} // Define the Bags model class

// Define the fields/columns for the Bags model
Bags.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, // Assuming id is the primary key
            autoIncrement: true // Assuming id auto-increments
        },
        bag_count: {
            type: DataTypes.INTEGER,
            allowNull: true // Allowing null values for bag_count
        }
    },
    {
        sequelize, // Pass the sequelize connection
        timestamps: false, // Disable timestamps
        freezeTableName: true, // Prevent Sequelize from pluralizing the table name
        underscored: true, // Use underscores instead of camelCase for automatically added attributes
        modelName: 'bags' // Set the model name
    }
);

module.exports = Bags; // Export the Bags model for use in other files