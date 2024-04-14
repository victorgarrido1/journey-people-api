const router = require('express').Router();
const { Bags, People, Location } = require('../../models');

// GET method route
router.get('/', async (req, res) => {
  try {
    const PeopleData = await People.findAll();
    res.status(200).json(PeopleData);
  } catch (err) {
    res.status(500).json(err);
  }

  /// find by Individual person
  router.get('/:id', async (req, res) => {
    try {
      const PeopleData = await People.findByPk(req.params.id);
      res.status(200).json(PeopleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//create a new person route
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        const PeopleData = await People.create(req.body);
        res.status(200).json(PeopleData);
    } catch (err) {
        res.status(500).json(err);        
    }
});



// Error route
router.get('/error', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = router;
