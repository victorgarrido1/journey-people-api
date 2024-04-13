const router = require('express').Router();
const PeopleRoutes = require('./peopleRoutes');
const placesRoutes = require('./placesRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/peopleRoutes', PeopleRoutes);
router.use('/places', placesRoutes);
router.use('/location', locationRoutes);

module.exports = router;