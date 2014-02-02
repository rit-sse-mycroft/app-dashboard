$(document).ready(function() {
  mobileHeight();
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