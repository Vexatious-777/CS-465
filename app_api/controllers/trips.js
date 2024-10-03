const mongoose = require('mongoose');
const Trip = require('../models/travlr'); // file path for models
const Model = mongoose.model('trips');

// GET /trips - lists all the trips
// HTML Status Inc
// JSON message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({})
    .exec();

     console.log(q); //Test Line to show query within console:: comment out later

    if(!q)
    { //Database returns no data
        return res.status(404).json(err);
    } else { // Return Trip list
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode }) // return one record by code
    .exec();

    if(!q)
    {
        return res
        .status(404)
        .json(err);
    } else {
        return res
        .status(200)
        .json(q);
    }
};

// Check on other controllers to add!

module.exports = {
    tripsList,
    tripsFindByCode
};