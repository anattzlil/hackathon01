var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mentorSchema =  new Schema({
    img_id: Number,
    name: String,
    lastName: String,
    city: String,
    adress: String,
    category: [String],
    img:{name: String, data: Buffer, contentType: String },
    hobbies: [String],
    story: String,
    helpGive: String,
    helpTake: String,
    availableTime: [],
    bookingReq: [{type: Schema.Types.ObjectId, ref:'bookingreq'}]
}, { usePushEach: true});



var Mentor = mongoose.model('mentor', mentorSchema);

module.exports = Mentor;

