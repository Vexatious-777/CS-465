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

const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q)
    {
        return res
        .status(400)
        .json(err);
    } else {
        return res
        .status(201)
        .json(q);
    }

    //console.log(q);
    
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

const tripsUpdateTrip = async(req, res) => {
    const q = await Model
    .findOneAndUpdate(
        {'code': req.params.tripCode},{
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
        }
    )
    .exec();

    if(!q)
    {
        return res
        .status(400)
        .json(err);
    } else {
        return res
        .status(201)
        .json(q);
    }
};

// Check on other controllers to add!

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};