const router = require('express').Router();
const { Location, People, Bags } = require('../../models');


//get all locations first attempt..
router.get('/', async (req, res, next) => {
    try {
        const locationData = await Location.findAll();
        res.status(200).json(locationData);
    } catch (err) {
        console.error('Error fetching locations:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;