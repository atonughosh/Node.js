// console.log('Starting notes.js');

const fs = require('fs');

//function to fetch notes with error handling
var fetchNotes = () => {
  //try to read the file if the file exists else don't crash :P
  try {
    //Read existing notes and store them in notes array defined above and return it
    return JSON.parse(fs.readFileSync('notes-data.json'));
  } catch (e) {
    //if there is no file called 'notes-data.json' return an empty array
    return [];
  }
};

var saveNotes = (notes) => {
  //write the array to file after coverting it to JSON
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//function to add a new note
var addNote = (title, body) => {
  var notes = fetchNotes(); //call fetchnotes function and store result in notes
  var note = {
    title,
    body
  };

  //check if note with same title exists
  var duplicateNotes = notes.filter((note) => note.title === title);

  //if note with same title exists then length of duplicateNotes will be > 0
  if (duplicateNotes.length === 0) {
    //push the new note to the notes array
    notes.push(note);
    saveNotes(notes); //call saveNotes function to write the notes array to JSON file
    return note;
  }
};

var getAll = () => {
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var deleteNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var printNote = (note) => {
  console.log('---------------------------------');
  console.log('Title: ' + note.title);
  console.log('Body: '+ note.body);
  console.log('---------------------------------');
};

module.exports = {
  addNote,
  getAll,
  getNote,
  deleteNote,
  printNote
};
