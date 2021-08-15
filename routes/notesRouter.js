const notes = require('express').Router();
const fs = require('fs');
const utils = require('../helpers/utils');

// GET 
notes.get('/api/notes',  (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.log(err);
        } else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
          // parsed notes is the response
          res.json(parsedNotes)
        }
      });
    })


module.exports = notes;