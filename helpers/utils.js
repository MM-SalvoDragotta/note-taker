const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const notesDb = require ('../db/db.json')

// Promise version of fs.readFile
const readFromDb = util.promisify(fs.readFile);
const writeToDb = util.promisify(fs.writeFile);

function getNotes() {
    return readFromDb('db/db.json', 'utf8')
    .then(notes => { 
        return JSON.parse(notes)   
    });
}






function newNote (body) {
    console.warn ('Implement new note')
}

function deleteNote(id) {
    console.warn ('Implement delete note') 
}


// module.exports = new Utils()

module.exports = {getNotes}