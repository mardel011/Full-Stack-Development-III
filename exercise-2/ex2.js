const moment = require('moment');

var getCurrentDate = () => {
    let wrapped = moment().format('dddd MMMM Do YYYY, h:mm:ss a');
    console.log(wrapped);
}

getCurrentDate();

