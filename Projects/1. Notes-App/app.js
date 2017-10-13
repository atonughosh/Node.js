console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  demand: true,
  describe: 'Title of the note to be added.',
  alias: 't'
};

const bodyOptions = {
  demand: true,
  describe: 'Body of the note to be added.',
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List/view all saved notes.')
  .command('read', 'Retrieve/view a note using title.', {
    title: titleOptions
  })
  .command('delete', 'Delete a note using title.', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0];

// console.log('Yargs ', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (typeof note !== 'undefined') {
    console.log('Success ! New note added.');
    notes.printNote(note);
  } else {
    console.log('Failed to add note. Note with same "Title" already exists.');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Listing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.printNote(note));
} else if (command === 'read') {
  var readResult = notes.getNote(argv.title);
  if (readResult) {
    console.log('Success! Note found');
    notes.printNote(readResult);
  } else {
    console.log('Note not found.');
  }
} else if (command === 'delete') {
  var noteDeleted = notes.deleteNote(argv.title);
  var message = noteDeleted ? 'Success! Note was deleted.' : 'Note not found.';
  console.log(message);
} else {
  console.log('Command not found !');
}
