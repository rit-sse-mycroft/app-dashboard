$(document).ready(function() {
  mobileHeight();
  setActive();
});

$(window).resize(mobileHeight);

function mobileHeight(){
  if($(window).width() < 768){
    var curHeight = $(window).height();
    var mainHeight = $('#main').height();
    var sidebarHeight = $('#sidebar').height();
    if(curHeight > mainHeight + sidebarHeight){
      $('#main').css('height', mainHeight + curHeight - sidebarHeight);
    }
  }
}

function setActive() {
  var nav = $('.nav-sidebar li a');
  for(i=0;i<nav.length;i++) {
    if(document.location.href == nav[i].href) {
      $(nav[i]).parent().addClass('active');
    }
  }
}