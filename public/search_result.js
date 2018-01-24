var mentors = [];

//getting all the mentors from the DB


// testing get the image
// $.ajax({
//     method: "GET",
//     url:'/test',
//     success: function(data){
//       $('#test-img').append(data);
//     },
//     error: function(jqXHR, textStatus, errorThrown) {
//       console.log(textStatus);
//     }
// });

var getMentors = function () {
    $.ajax({
        method: "GET",
        url: 'results',
        dataType: "json",
        success: function (data) {
            mentors = [];
            console.log(data);
            var counter = 1;
            for (i in data) {
                mentors[i] = data[i];
                mentors[i].img = 'img/profile'+i+'.png';
                mentors[i].class = "shape" + counter;
                if(counter === 1 || counter === 3 || counter === 5){
                    mentors[i].append = 'img/rec.png'
                } else if (counter === 2 || counter === 6){
                    mentors[i].append = 'img/triangle.png'
                } else if (counter === 4){
                    mentors[i].append = 'img/triangle2.png'
                }
                counter++;
                if(counter === 7){
                    counter = 1;
                };

            }
            console.log(mentors);
            _renderMentors();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
};



// rendering the mentors using handlebars
var _renderMentors = function(){
    var source = $('#result-template').html();
    var template = Handlebars.compile(source);
    for (i in mentors){
        var newHTML = template (mentors[i]);
        $('.result-container').append(newHTML);
        // if (mentors[i].class === "shape1" || mentors[i].class === "shape3" || mentors[i].class === "shape5"){
        //     $('.img-container').append('<img src="img/rec.png" class="' + mentors[i].class+ '"></img>');
        // } else if ( mentors[i].class === "shape2" || mentors[i].class === "shape6"){
        //     $('.img-container').append('<img src="img/triangle.png" class="' + mentors[i].class+ '"></img>');
        // }else if (mentors[i].class === "shape4"){
        //     $('.img-container').append('<img src="img/triangle2.png" class="' + mentors[i].class+ '"></img>');
        // }
    };
};

//pressing the button will redirect to the mentors profile


//pressing on back will redirect to home


//optional-button "more"

getMentors();