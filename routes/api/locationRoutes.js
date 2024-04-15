const router = require('express').Router();
const { Location } = require('../../models');

// Get all locations
router.get('/', async (req, res, next) => {
  try {
    const locationData = await Location.findAll();
    res.status(200).json(locationData);
  } catch (err) {
    console.error('Error fetching locations:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single location by ID
router.get('/:id', async (req, res, next) => {
  try {
    const locationData = await Location.findByPk(req.params.id);
    if (!locationData) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.status(200).json(locationData);
  } catch (err) {
    console.error('Error getting a single location:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new location
router.post('/', async (req, res, next) => {
  try {
    const locationData = await Location.create(req.body);
    res.status(200).json(locationData);
  } catch (err) {
    console.error('Error creating location:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a location by ID
router.delete('/:id', async (req, res, next) => {
  try {
    const locationData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!locationData) {
      return res.status(404).json({ message: "No location was found, please try again." });
    }
    res.status(200).json({ message: "Location deleted successfully." });
  } catch (err) {
    console.error('Error deleting location:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;