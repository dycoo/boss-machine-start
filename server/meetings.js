const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db.js');


meetingsRouter.param('meetingid',(req,res,next,id)=>{
       
   if (db.getFromDatabaseById('meetings',id)){
        
    }else{
        res.status(404).send('This ID is not found');
    }
    next();
})

// GET - all mettings
meetingsRouter.get('/',(req,res,next)=>{
    //console.log('Get all minions');
    res.send(db.getAllFromDatabase('meetings')).json();
})

// GET - meeting by ID
meetingsRouter.get('/:meetingid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('meetings',req.params.meetingid));
    res.send(db.getFromDatabaseById('meetings',req.params.meetingid)).json();
})

// PUT - meeting by ID
meetingsRouter.put('/:meetingid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('meetings',req.params.meetingid));
    res.send(db.updateInstanceInDatabase('meetings',req.body)).json();
})

// DELETE - meeting by ID
meetingsRouter.delete('/:meetingid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('meetings',req.params.meetingid));
    res.send(db.deleteFromDatabasebyId('meetings',req.params.meetingid)).json();
})

// PUT - meeting by ID
meetingsRouter.post('/',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('meetings',req.params.meetingid));
    res.send(db.addToDatabase('meetings',req.body)).json();
})

module.exports.meetingsRouter = meetingsRouter;