var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/mentorsDB', function() {
    console.log("DB connection established!!!")
});


var Mentor = require('./models/mentorModel');
var Schema = mongoose.Schema;

// img path
var imgPath0 = './public/img/profile1_0.png';
var imgPath1 = './public/img/profile1_0.png';
var imgPath2 = './public/img/profile1_0.png';
var imgPath3 = './public/img/profile1_0.png';
var imgPath4 = './public/img/profile1_0.png';
var imgPath5 = './public/img/profile1_0.png';



var newMentor0 = new Mentor({
    name: "Hanna",
    lastName: "Levi",
    city: "Givatayim",
    adress: "Gnesin, 2, 3",
    category: "Cooking",
    hobbies: ["Politics", "Watching TV"],
    story: "I'm a 72 years old widdow. Used to be take care of children as a proffesion ( including my own ), I have  2 children and 5 grandchildren which I used to host for dinners at my place every week or two, but they are living far and I miss hosting and cooking for them.",
    helpGive: "I'm fond of cooking since early years. Will be happy to share my cooking secrets and cook with you something.",
    helpTake: "I only want to speak and share my experinence with youngsters, so our meeting is already a freat help",
    availableTime: ['12/1/2018, 10:00', '12/1/2018, 14:00', '14/1/2018, 12:00']
});

// newMentor.save();
var newMentor1 = new Mentor({
    name: "Yossi",
    lastName: "Elmaliach",
    city: "Beit Shemesh",
    adress: "Herzl, 1, 1",
    category: "Travelling",
    hobbies: ["Pink unicorns", "Making toys from baloons"],
    story: "Used to be take care of children as a proffesion ( including my own ), I have  2 children and 5 grandchildren which I used to host for dinners at my place every week or two, but they are living far and I miss hosting and cooking for them.",
    helpGive: "I'm fond of cooking since early years. Will be happy to share my cooking secrets and cook with you something.",
    helpTake: "I only want to speak and share my experinence with youngsters, so our meeting is already a freat help",
    availableTime: ['12/1/2018, 10:00', '12/1/2018, 14:00', '14/1/2018, 12:00']
});

var newMentor2 = new Mentor({
    name: "David",
    lastName: "Cohen",
    city: "Ramat Aviv",
    adress: "Weizman, 1, 1",
    category: "Travelling",
    hobbies: ["UFO", "Gambling"],
    story: "Used to be take care of children as a proffesion ( including my own ), I have  2 children and 5 grandchildren which I used to host for dinners at my place every week or two, but they are living far and I miss hosting and cooking for them.",
    helpGive: "I'm fond of cooking since early years. Will be happy to share my cooking secrets and cook with you something.",
    helpTake: "I only want to speak and share my experinence with youngsters, so our meeting is already a freat help",
    availableTime: ['12/1/2018, 10:00', '12/1/2018, 14:00', '14/1/2018, 12:00']
});

var newMentor3 = new Mentor({
    name: "Moti",
    lastName: "Guri",
    city: "Tel Aviv",
    adress: "Bugrashov, 1, 1",
    category: "Cooking",
    hobbies: ["Creating receipes", "Go out and dance"],
    story: "Used to be take care of children as a proffesion ( including my own ), I have  2 children and 5 grandchildren which I used to host for dinners at my place every week or two, but they are living far and I miss hosting and cooking for them.",
    helpGive: "I'm fond of cooking since early years. Will be happy to share my cooking secrets and cook with you something.",
    helpTake: "I only want to speak and share my experinence with youngsters, so our meeting is already a freat help",
    availableTime: ['12/1/2018, 10:00', '12/1/2018, 14:00', '14/1/2018, 12:00']
});

newMentor0.img.data = fs.readFileSync(imgPath0);
newMentor0.img.contentType = 'image/png';
newMentor0.img.name = 'profile1';
// newMentor0.save(function (err, image) {
//       if (err) throw err;
//     console.log('saved img'+ newMentor0.name +' to mongo');
// });



var app = express();
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/results', function(req, res){
    Mentor.find((function (err, data){
        if (err) throw error;
        else{
           res.send(data);
        };
    }));
});

app.get('/category/:name', function(req,res){
    Mentor.find({category:[req.params.name]}, (function(err, data){
        if(err) throw error;
        else{console.log(data)
            res.send(data); } ;
    }));
});

// app.get('/s', function(req, res){
//     var sR = require('public/search_result.js');
//     res.send()
// });



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