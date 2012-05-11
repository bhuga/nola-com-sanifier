(function() {
  // keep header from chasing me down the page
  $(window).on('scroll', function(event) {
    $('body').removeClass('adv-condense-header');
    $('#adv-edition-chooser').removeClass('adv-open');
  });

  // remove mouseovers that cover enter page, making them inescapable
  // unable to get this working reliably based on enter/exit events, so just do
  // it all the time.
  $(window).mousemove(function() {
    $('.adv-open').removeClass('adv-open');
  });
  
  // remove racism
  $(document).on('load', function() {
    $('.comment').remove();
  });

}).call(this)
