const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New node added!"))
    }
    else {
        console.log(chalk.red('Note title taken!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter(note => note.title !== title)
    if (notesToKeep.length === notes.length) {
        console.log(chalk.red("No note found!"))
    }
    else {
        console.log(chalk.green('Note removed!'))
    }
    saveNotes(notesToKeep)
}

const listNotes = () => {
    console.log(chalk.inverse("Your notes:"))
    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse('Note text:'))
        console.log(note.body)
    } else {
        console.log(chalk.red('No note was found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}