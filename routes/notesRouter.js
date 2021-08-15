const notes = require('express').Router();
const utils = require('../helpers/utils');

// GET 
notes.get('/notes', function (req, res) {
    console.log(`${req.method} request received to get notes`);
    utils.getNotes()
        .then(note => res.json(note))        
});

// POST
notes.post('/notes', (req, res) => {
    console.log(`${req.method} request received to add a note`);
    utils.newNote(req.body)
        .then((note) => res.json(note))
});

// DELETE
notes.delete('/notes/:id', function (req, res) {
    console.log(`${req.method} request received to delete a note`);
    utils.deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
});

module.exports = notes;