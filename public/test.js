$.ajax({
    method: "GET",
    url:'/test',
    success: function(data){
      $('#test-img').append(data);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus);
    }
  });