var socket = io.connect('http://localhost:7777');
var classes = {
  DEBUG: 'text-muted',
  INFO: 'text-info',
  WARNING: 'text-warning',
  ERROR: 'text-danger',
  EXCEPTION: 'text-danger',
  WTF: 'text-danger'
}
socket.on('initial logs', function(data){
  for(i = 0; i < data.length; i++){
    $('#logs').prepend('<p class="' + data[i]['level'] + ' ' + classes[data[i]['level']] + '">' + data[i]['message'] + '</p>');
  }
});

socket.on('log', function(data){
  $('#logs').prepend('<p class="' + data['level'] + ' ' + classes[data['level']] + '">' + data['message'] + '</p>');
});