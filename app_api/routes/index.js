const express = require('express'); // express app
const router = express.Router();   // router logic

// import controllers for routing
const tripsController = require('../controllers/trips');
console.log(tripsController);

// define route for our trips endpoint
router
.route('/trips')
.get(tripsController.tripsList); // GET method routes.tripList

router
.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode);

module.exports = router;