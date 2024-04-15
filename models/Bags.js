const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bags extends Model {}

Bags.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bag_budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    person_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    person_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location', // Assuming the table name for person is 'Person' with uppercase P
        key: 'id',
        unique: true // Assuming each bag is associated with only one person
      }
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location', // Assuming the table name for location is 'Location' with uppercase L
        key: 'id',
        unique: false // Assuming multiple bags can be associated with the same location
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bags'
  }
);

module.exports = Bags;