const notes = require('express').Router();
const fs = require('fs');
const utils = require('../helpers/utils');

// GET 
notes.get('/notes',  (req, res) => {
  console.info("GET")

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      console.info(data)
        if (err) {
          console.warn(err);
        } else {
          // Convert string into JSON object
          const parsedNotes = JSON.parse(data);
          // parsed notes is the response
          console.log(parsedNotes)
          res.json(parsedNotes)
        }
      });
    })


module.exports = notes;