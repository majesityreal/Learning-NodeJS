const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Atlanta', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})


forecast(43.489325, -89.012222, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})