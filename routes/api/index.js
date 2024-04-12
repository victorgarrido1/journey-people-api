const router = require('express').Router();
const PeopleRoutes = require('./peopleRoutes');
const placesRoutes =  require('./placesRoutes');

router.use('/peopleRoutes', PeopleRoutes);
router.use('/places', placesRoutes);
