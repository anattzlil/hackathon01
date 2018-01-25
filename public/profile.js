
var mentor;

var id = (window.location.pathname).slice(8);
console.log(id);

//get the relevent mentor data
$.ajax({
        method:"GET",
        url:'profile-data/'+id,
        success: function(data) {
            console.log(data);
            mentor = data;
            mentor.img = './../../img/profile'+data.img_id+'.png';
            renderMentorProfile();
        },
        error: function (jqXHR, textStatus, errorThrown) {
                     console.log(textStatus);
                 }
});

//post the request from the user
var postUserRequest = function(bookingRequest){
    console.log(bookingRequest);
$.ajax({
    method: "POST",
    url: 'userrequest',
    data: bookingRequest, 
    success: function(data) {
        console.log(data);

    alert("thank you for your request!");
    },
    error: function (jqXHR, textStatus, errorThrown) {
                 console.log(textStatus);
    }
})
}



// render the mentor page with relevant data
function renderMentorProfile() {
    var source = $('#profile-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template (mentor);
    $('.profile-content').append(newHTML);
}


// on click 'send inquiry' btn 

$('.profile-content').on('click','.send-form', function() {
        var message = $(this).siblings("textarea").val();
        var chosenTime = $(this).siblings("select").find("option").filter(":selected").text();
        var bookingRequest = {user_name: "SHACHAR", chosenDate: chosenTime, text: message, mentor: id, uploadDate:{}};
        postUserRequest(bookingRequest);
        
});

    
$('.profile-content').on('click', '.arrow-back', function(){
        $.ajax ({
            method: "GET",
            url: '/',
            success: function () {
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(textStatus);
            }
        });
});

