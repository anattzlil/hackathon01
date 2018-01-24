// get request for createing a route for profile page

// var createProfileRoute = function () {
//     $.ajax({
//         method: "GET",
//         url: '/userId',
//         dataType: "json",
//         success: function (data) {
//             console.log('data returned!');
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log(textStatus);
//           }
//         });
//     };

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
        alert(chosenTime);
        var bookingRequest = {time: chosenTime, message: message};
        console.log(bookingRequest);
        
});





// $posts.on('click', '.add-comment', function () {
    
//       var $comment = $(this).siblings('.comment');
//       var $user = $(this).siblings('.name');
    
//       if ($comment.val() === "" || $user.val() === "") {
//         alert("Please enter your name and a comment!");
//         return;
//       }
    
//       var postIndex = $(this).closest('.post').index();
//       var newComment = { text: $comment.val(), user: $user.val() };
    
//       app.addComment(newComment, postIndex);
    
//       $comment.val("");
//       $user.val("");
    
//     });
    
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

