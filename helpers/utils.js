const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

// Promise version of fs.readFile
const readFromJson = util.promisify(fs.readFile);
const writeToJson = util.promisify(fs.writeFile);

function getNotes () {
 return readFromJson ('../db/db.json')
}

function newNote (body) {
    console.log ('Implement new note')
}

function deleteNote(id) {
    console.log ('Implement delete note') 
}


module.exports = { getNotes, newNote, deleteNote };