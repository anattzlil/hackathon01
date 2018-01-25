$(function () {
  var socket = io();
  var nickname = "Shahar";
  var currentNick;
  var mentor;

  $('form').submit(function(){
    socket.emit('send-nickname', nickname);
    socket.emit('chat message', $('#m').val(), nickname);
    $('#m').val('');
    return false;
  });

  socket.on('send-nickname', function(nick){
    currentNick = nick;
  });

  socket.on('chat message', function(msg, nick){
    if(nick == "Hanna") {
      $('.user-inbox').append('<div id="messages-user" class="msg-user"><img class="user-image-inbox" src="./../../../img/profile0.png"><span class="user-name-inbox">HANNA</span></div>')
      $('.user-inbox #messages-user:last-child').last().append($('<p class="user-inbox-text">').text(msg));
    }
    else { 
      $('.user-inbox').append('<div id="messages-mentor" class="msg-mentor"><img class="mentor-image-inbox" src="./../../../img/user.png"><span class="mentor-name-inbox">YOU</span></div>')
      $('.user-inbox #messages-mentor:last-child').last().append($('<p class="mentor-inbox-text">').text(msg));
    }
  });
});

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