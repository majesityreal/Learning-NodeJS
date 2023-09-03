const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c01ca034e3b93d3839a79f461827edfb&query=' + latitude + ',' + longitude + '&units=f'

    request({url: url, json:true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        }
        else if (response.body.error) {
            console.log(response.body)
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees')
        }
    })
}

module.exports = forecast