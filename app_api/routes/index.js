const express = require('express'); // express app
const router = express.Router();   // router logic

// import controllers for routing
const tripsController = require('../controllers/trips');

// define route for our trips endpoint
router
.route('/trips')
.get(tripsController.tripsList) // GET method routes.tripList
.post(tripsController.tripsAddTrip); //POST method

router
.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode)
.put(tripsController.tripsUpdateTrip);

module.exports = router;