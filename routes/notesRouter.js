const notes = require('express').Router();
const fs = require('fs');
const utils = require('../helpers/utils');

// GET This works. 
// notes.get('/notes',  (req, res) => {
//   console.info("GET")

//     fs.readFile('./db/db.json', 'utf8', (err, data) => {
//       // console.info(data)
//         if (err) {
//           // console.warn(err);
//         } else {
//           // Convert string into JSON object
//           const parsedNotes = JSON.parse(data);
//           // parsed notes is the response
//           // console.log(parsedNotes)
//           res.json(parsedNotes)
//         }
//       });
//     })


notes.get('/notes', function (req, res) {
  // console.info("GET")
  // console.log(utils.getNotes())
  utils.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.json(err));
})   

module.exports = notes;