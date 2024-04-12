const express = require('express');
const router = express.Router();

// Define your routes
router.get('/', (req, res) => {
  res.send('Hello World!');
});

// Export the router
module.exports = router;
