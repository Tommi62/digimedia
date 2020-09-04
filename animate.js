$('#slink').on('click', function(event) {
  /*if (this.hash !== '') {
    event.preventDefault();
    let hash = this.hash;

    $('html, body').animate({scrollTop: $(hash).offset().Top},
        800, function() {
          window.location.hash = hash;
        });
  }*/
  $('html, body').animate({scrollLeft: 5000}, 800);
});

$('#flink').on('click', function() {
  $('html, body').animate({scrollLeft: -5000}, 800);
});

$('nav').hover(
    function() {$(this).animate({'opacity': '1'}, 800);},
    function() {$(this).animate({'opacity': '0'}, 800);}
);