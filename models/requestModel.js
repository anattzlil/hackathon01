
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var reqSchema = new Schema({
    user_name: String,
    text: String,
    chosenDate: String,
    uploadDate: {type: Date, default: Date.now}
}, { usePushEach: true });

var BookingRequest = mongoose.model('bookingreq', reqSchema);
module.exports = BookingRequest;
