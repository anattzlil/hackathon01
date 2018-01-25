
var id = (window.location.pathname).slice(8, 6);
console.log(id);
var mentor;

$.ajax({
    method:"GET",
    url:'profile-data/inbox',
    success: function(data) {
        console.log(data);
        mentor = data;
        console.log(mentor);
        console.log(mentor[0].bookingReq);
        mentor.img = './../../img/profile'+data.img_id+'.png';
        renderInbox();
    },
    error: function (jqXHR, textStatus, errorThrown) {
                 console.log(textStatus);
             }
});

var renderInbox = function(){
    var source = $('#inbox-template').html();
    var template = Handlebars.compile(source);
    var newHTML = template (mentor[0].bookingReq[0]);
    $('.inbox-container').append(newHTML);
}