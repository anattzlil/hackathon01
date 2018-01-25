$(function () {
  var socket = io();
  var nickname = "Hanna";
  var currentNick;

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
      $('.user-inbox').append('<div id="messages-mentor" class="msg-mentor"><img class="mentor-image-inbox" src="./../../../img/profile0.png"><span class="mentor-name-inbox">YOU</span></div>');
      $('.user-inbox #messages-mentor:last-child').last().append($('<p class="mentor-inbox-text">').text(msg));
    }
    else { 
      $('.user-inbox').append('<div id="messages-user" class="msg-user"><img class="user-image-inbox" src="./../../../img/user.png"><span class="user-name-inbox">SHAHAR</span></div>');
      $('.user-inbox #messages-user:last-child').append($('<p class="user-inbox-text">').text(msg));
    }
  });
});
