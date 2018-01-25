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

//post the request from the user
var postUserRequest = function(bookingRequest){
    console.log(bookingRequest);
$.ajax({
    method: "POST",
    url: 'userrequest',
    data: bookingRequest, 
    success: function(data) {
        // console.log(data);
    // alert("thank you for your request!");
    //    openPopup("thank you for your request!"); 
       console.log("thank you for your request!");
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
        openPopup();
        
});

// $('.profile-content').find(".pop-up")
    
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


// // Popup Window

// function openPopup() {
//     var scrollTop = '';
//     var newHeight = '100';
     
//     $(window).bind('scroll', function() {
//       scrollTop = $( window ).scrollTop();
//       newHeight = scrollTop + 100;
//     });
            
//     $('.send-form').click(function(e) {
//       e.stopPropagation();
//       if(jQuery(window).width() < 767) {
//         $(this).after( $( ".popup" ) );
//         $('.popup').show().addClass('popup-mobile').css('top', 0);
//         $('html, body').animate({
//           scrollTop: $('.popup').offset().top
//         }, 500);   
//       } else {
//         $('.popup').removeClass('popup-mobile').css('top', newHeight).toggle();
//       };
//     });
            
//     $('html').click(function() {
//       $('.popup').hide();
//     });
     
//     $('.popup-btn-close').click(function(e){
//       $('.popup').hide();
//     });
     
//     $('.popup').click(function(e){
//       e.stopPropagation();
//     });

// }




// // Popup Window version 2

function openPopup() {
    var scrollTop = '';
    var newHeight = '400';
     
    $(window).bind('scroll', function() {
      scrollTop = $( window ).scrollTop();
      newHeight = scrollTop + 100;
    });
            
    // $('.send-form').click(function(e) {
    //  e.stopPropagation();
      if(jQuery(window).width() < 767) {
        $(this).after( $( ".popup" ) );
        $('.popup').show().addClass('popup-mobile').css('top', 0);
        $('html, body').animate({
          scrollTop: $('.popup').offset().top
        }, 500);   
      } else {
        $('.popup').removeClass('popup-mobile').css('top', newHeight).toggle();
      };
    // });
            
    $('html').click(function() {
      $('.popup').hide();
    });
     
    $('.popup-btn-close').click(function(e){
      $('.popup').hide();
    });
     
    $('.popup').click(function(e){
      e.stopPropagation();
    });

}

$('.profile-content').find(".pop-up")



// Popup Window version 3

// function openPopup() {
//     var scrollTop = '';
//     var newHeight = '300';
     
//     $(window).bind('scroll', function() {
//       scrollTop = $( window ).scrollTop();
//       newHeight = scrollTop + 100;
//     });
            
//     // $('.send-form').click(function(e) {
//     //  e.stopPropagation();
//       if(jQuery(window).width() < 767) {
//         $(this).after( $('.profile-content').find(".pop-up") );
//         $('.profile-content').find(".pop-up").show().addClass('popup-mobile').css('top', 0);
//         $('html, body').animate({
//           scrollTop: $('.profile-content').find(".pop-up").offset().top
//         }, 500);   
//       } else {
//         $('.profile-content').find(".pop-up").removeClass('popup-mobile').css('top', newHeight).toggle();
//       };
//     // });
            
//     $('html').click(function() {
//         $('.profile-content').find(".pop-up").hide();
//     });
     
//     $('.popup-btn-close').click(function(e){
//         $('.profile-content').find(".pop-up").hide();
//     });
     
//     $('.profile-content').find(".pop-up").click(function(e){
//       e.stopPropagation();
//     });

// }