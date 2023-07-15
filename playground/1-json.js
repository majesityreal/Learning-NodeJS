const fs = require('fs')

// const book = {
//     title: 'Start with why',
//     author: 'Simon Sinek'
// }

// const bookJSON = JSON.stringify(book) // creates a string from a json object
// fs.writeFileSync('1-json.json', bookJSON)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.age = 21
data.name = 'carson'

const dataString = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataString)