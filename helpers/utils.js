const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');

// Promise version of fs.readFile
const readFromDb = util.promisify(fs.readFile);
const writeToDb = util.promisify(fs.writeFile);

function getNotes() {
    return readFromDb('db/db.json', 'utf8')
    .then(notes => { 
        return JSON.parse(notes)   
    });
}

function newNote (note) {
    const {title , text} = note;
    const newNote = { title, text, id: uuidv4()};
    console.log(newNote);
    return getNotes()
        .then(notes => [...notes, newNote])
        .then(notes => writeToDb('db/db.json', JSON.stringify(notes , null , 4)))
        .then(() => newNote);       
}

function deleteNote(id) {
    console.warn ('Implement delete note') 
}

module.exports = {getNotes, newNote, deleteNote }