var router = require('express').Router();
var Thing = require('../models/userModel');


router.get('/', function(req,res){
    Thing.find({}, function (err, response) {
        if (err) {
            res.sendStatus(500);
        } else {
            res.send(response);
            console.log('shelf route get all',response);
        }
    });
});