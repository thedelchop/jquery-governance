// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
function moreMotionsInitializer() {
  $('a.more_motions').live('click', function(e){
    var self = $(this);
    var data = {id: self.attr('data-last-id')};
    var ul = self.closest("section").find("ul");
    self.parent().remove();
    $.get("/motions/show_more", data, function(html) {
      $(ul).append(html);
    });
    e.preventDefault();
  });
}

function highlightFade() {
  $('.highlight_fade').animate({backgroundColor : '#ffffff'}, 3000);
}

$(document).ready(function(){
    moreMotionsInitializer();
    highlightFade();
});
