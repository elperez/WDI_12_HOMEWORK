// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

window.onload = function() {
  var btn = document.querySelector('button');
  btn.addEventListener('click', function(event) {

    event.preventDefault();

    var settings = {
      url: '/api/comments/1'
    }
    $.ajax(settings).done(function(response) {
      debugger
      // var comment = response.data;
      // for (i=0 ; i<comment.length; i++){
        var source = $('#source').html();
        var template = Handlebars.compile(source);
        var html = template({ comment: response.comment,
          name: response.name});
        $('.comments').append(html);
      // }
    });

    console.log('after searching')
  });

  function loadMoreGiffs() {

  }

  $(window).scroll(function() {
     if($(window).scrollTop() + $(window).height() == $(document).height()) {
         loadMoreGiffs();
     }
  });
}
