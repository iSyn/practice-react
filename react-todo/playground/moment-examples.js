var moment = require('moment')

console.log(moment().format())

var now = moment()

console.log('Current Timestamp: ', now.unix())

var timestamp = 1490075024
var currentMoment = moment.unix(timestamp)

console.log('Current Moment: ', currentMoment.format('MMMM Do, YYYY @ h:mm A'))
