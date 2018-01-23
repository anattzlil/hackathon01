var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var multer = require('multer');
// var path = require('path');

mongoose.connect('mongodb://localhost/mentorsDB', function() {
    console.log("DB connection established!!!")
});


var Mentor = require('./models/mentorModel');
var Schema = mongoose.Schema;

// img path
var imgPath = './public/img/profile1_0.png';



var newMentor = new Mentor({
    name: "Hanna",
    lastName: "Levi",
    city: "Givatayim",
    adress: "Gnesin, 2, 3",
    category: ["Cooking", "Traveling"],
    hobbies: ["Politics", "Watching TV"],
    story: "I'm a 72 years old widdow. Used to be take care of children as a proffesion ( including my own ), I have  2 children and 5 grandchildren which I used to host for dinners at my place every week or two, but they are living far and I miss hosting and cooking for them.",
    helpGive: "I'm fond of cooking since early years. Will be happy to share my cooking secrets and cook with you something.",
    helpTake: "I only want to speak and share my experinence with youngsters, so our meeting is already a freat help",
    availableTime: ['12/1/2018, 10:00', '12/1/2018, 14:00', '14/1/2018, 12:00']
});

newMentor.img.data = fs.readFileSync(imgPath);
newMentor.img.contentType = 'image/png';
newMentor.img.name = 'profile1';
newMentor.save(function (err, image) {
      if (err) throw err;
    console.log('saved img to mongo');
});



var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', function (req, res, next) {
    Mentor.findOne({name: "Hanna"}, function (err, mentor) {
            if (err) return next(err);
            res.contentType(mentor.img.contentType);
            res.send(mentor.img.data);      
    });         
});

app.listen(9000, function() {
    console.log("Ready on 9000, babe!");
  });