const events = require('events');
const moment = require('moment');

const eventEmitter = new events.EventEmitter();

const currentTimeCallback = () => {
    let currentTime = moment().format('h:mm:ss a');
    console.log(currentTime)
}

eventEmitter.on('currentTime', currentTimeCallback);
eventEmitter.emit('currentTime');