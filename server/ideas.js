const express = require('express');
const checkIdea= require('./checkMillionDollarIdea.js');
const ideasRouter = express.Router();
const db = require('./db.js');


ideasRouter.param('ideaid',(req,res,next,id)=>{
       
   if (db.getFromDatabaseById('ideas',id)){
        
    }else{
        res.status(404).send('This ID is not found');
    }
    next();
})

// GET - all ideas
ideasRouter.get('/',(req,res,next)=>{
    //console.log('Get all minions');
    res.send(db.getAllFromDatabase('ideas')).json();
})

// GET - idea by ID
ideasRouter.get('/:ideaid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('ideas',req.params.ideaid));
    res.send(db.getFromDatabaseById('ideas',req.params.ideaid)).json();
})

// PUT - idea by ID
ideasRouter.put('/:ideaid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('ideas',req.params.ideaid));
    if(checkIdea(req.body.numWeeks,req.body.weeklyRevenue)){
        res.send(db.updateInstanceInDatabase('ideas',req.body)).json();
    }else{
        res.status(404).send('this is not a Million Dollar Idea');
    }

    
})

// DELETE - idea by ID
ideasRouter.delete('/:ideaid',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('ideas',req.params.ideaid));
    res.send(db.deleteFromDatabasebyId('ideas',req.params.ideaid)).json();
})

// POST - idea by ID
ideasRouter.post('/',(req,res,next)=>{
    //console.log(db.getFromDatabaseById('ideas',req.params.ideaid));
    if(checkIdea(req.body.numWeeks,req.body.weeklyRevenue)){
        res.send(db.addToDatabase('ideas',req.body)).json();    
    }else{
        res.status(404).send('this is not a Million Dollar Idea');
    }
    
    
})

module.exports.ideasRouter = ideasRouter;