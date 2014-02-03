var socket = io.connect('http://localhost:7777');
socket.on('initial logs', function(data){
  for(i = 0; i < data.length; i++){
    $('#logs').prepend('<p class="' + data[i]['level'] + '">' + data[i]['message'] + '</p>');
  }
});

socket.on('log', function(data){
  $('#logs').prepend('<p class="' + data['level'] + '">' + data['message'] + '</p>');
});