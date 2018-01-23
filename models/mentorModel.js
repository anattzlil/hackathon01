var mongoose = require('mongoose');

var mentorSchema =  new mongoose.Schema({
    name: String,
    lastName: String,
    age: Number,
    city: String,
    adress: String,
    category: String,
    img:{data: Buffer, contentType: String },
    hobbies: [String],
    story: String,
    helpGive: String,
    helpTake: String,
    availableTime: [Date],
    bookingReq: [reqSchema]
})