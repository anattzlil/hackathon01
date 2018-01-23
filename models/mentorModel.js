var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mentorSchema =  new Schema({
    name: String,
    lastName: String,
    city: String,
    adress: String,
    category: String,
    img:{name: String, data: Buffer, contentType: String },
    hobbies: [String],
    story: String,
    helpGive: String,
    helpTake: String,
    availableTime: []
    // bookingReq: [{type: Schema.Types.ObjectId, ref:'bookingreq'}]
}, { usePushEach: true});

// var reqSchema = new mongoose.Schema({
//     user_name: String,
//     mentor: [{type: Schema.Types.ObjectId, ref: 'mentor'}],
//     text: String,
//     uploadDate: {type: Date, default: Date.now}
// }, { usePushEach: true });

var Mentor = mongoose.model('mentor', mentorSchema);
// var BookingRequest = mongoose.model('bookingreq', reqSchema);

module.exports = Mentor;
// module.exports = BookingRequest;

