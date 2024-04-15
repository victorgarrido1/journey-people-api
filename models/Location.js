const { Model, DataTypes } = require("sequelize"); // Import necessary modules
const sequelize = require("../config/connection"); // Assuming this file correctly configures Sequelize

// Create our Location model
class Location extends Model {}

// Define fields and columns for the Location model
Location.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // Define id as the primary key with auto-increment
    },
    location_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    // Define other fields/columns here as needed
  },
  {
    sequelize, // Pass the sequelize connection
    timestamps: false, // Disable timestamps
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true, // Use underscores instead of camelCase for automatically added attributes
    modelName: "location", // Set the model name (use PascalCase)
  }
);

module.exports = Location; // Export the Location model for use in other files