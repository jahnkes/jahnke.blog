(function() {
  $(function() {
    return $(window).on('scroll', function(event) {
      return $('#site-header').toggleClass('scrolled', $(window).scrollTop() > 50);
    });
  });

}).call(this);
