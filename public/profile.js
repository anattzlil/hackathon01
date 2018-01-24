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


//   var fetch = function () {
//     $.ajax({
//       method: "GET",
//       url: '/posts',
//       success: function (data) {
//         console.log(data);
//         posts = data;
//         _renderPosts();

//       },
//       error: function (jqXHR, textStatus, errorThrown) {
//         console.log(textStatus);
//       }
//     });
//   };