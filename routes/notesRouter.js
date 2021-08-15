const notes = require('express').Router();
const fs = require('fs');
const utils = require('../helpers/utils');

// GET
notes.get('/notes', function (req, res) {
  // console.info("GET")
  // console.log(utils.getNotes())
  utils.getNotes()
    .then(notes => res.json(notes))    
})   

// POST 
notes.post('/notes', (req, res) => {
  utils.newNote(req.body)
      .then((note) => res.json(note))      
});

module.exports = notes;