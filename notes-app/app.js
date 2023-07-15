const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require( './notes.js');

console.log(getNotes());

// customize yargs version
yargs.version('1.1.1');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log("adding a new note");
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log("Removing the note");
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'list a note',
    handler: function () {
        console.log("Listing all the notes");
    }
})

// Create remove command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log("Reading the note");
    }
})

console.log(yargs.argv);