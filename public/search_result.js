var mentors = [];

//getting all the mentors from the DB

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

//getting  mentors by category from the DB

var category = function(category_name){
    $.ajax ({
        method: "GET",
        url: 'category/' + category_name,
        success: function (data) {
            console.log(data);
            mentors = [];
            var counter = 1;
            for (i in data) {
                mentors[i] = data[i];
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
            console.log(window.location.pathname);
            _renderMentors();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    })
}

// rendering the mentors using handlebars
var _renderMentors = function(){
    $('.result-container').empty();
    var source = $('#result-template').html();
    var template = Handlebars.compile(source);
    for (i in mentors){
        var newHTML = template (mentors[i]);
        $('.result-container').append(newHTML);
    };
};

//pressing the button will redirect to the mentors profile
// $('.result-container').on('click', '.profile-link', function(){

// })

//pressing on back will redirect to home


//optional-button "more"

getMentors();

$('.category-link').on('click', function(){
    var id = $(this).parents('.category-name').data().name;
    console.log(id);
    category(id);
})