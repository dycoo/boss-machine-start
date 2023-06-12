const express = require('express');
const minionsRouter = express.Router();
const db = require('./db.js');


minionsRouter.param('minionid',(req,res,next,id)=>{
       
   if (db.getFromDatabaseById('minions',id)){
        
    }else{
        res.status(404).send('This ID is not found');
    }
    next();
})

// GET - all minions
minionsRouter.get('/',(req,res,next)=>{
    //console.log('Get all minions');
    res.send(db.getAllFromDatabase('minions')).json();
})

// GET - minion by ID
minionsRouter.get('/:minionid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('minions',req.params.minionid));
    res.send(db.getFromDatabaseById('minions',req.params.minionid)).json();
})

// PUT - minion by ID
minionsRouter.put('/:minionid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('minions',req.params.minionid));
    res.send(db.updateInstanceInDatabase('minions',req.body)).json();
})

// DELETE - minion by ID
minionsRouter.delete('/:minionid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('minions',req.params.minionid));
    res.send(db.deleteFromDatabasebyId('minions',req.params.minionid)).json();
})

// PUT - minion by ID
minionsRouter.post('/',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('minions',req.params.minionid));
    res.send(db.addToDatabase('minions',req.body)).json();
})

module.exports.minionsRouter = minionsRouter;