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
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'The content of the notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title);
        console.log("Body: " + argv.body);
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
