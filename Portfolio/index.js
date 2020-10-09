$(document).ready(function(keyframes, options) {

  $('#Modal2').on('shown.bs.modal', function() {
    $('#video1').attr('src', 'https://www.youtube.com/embed/2rZ_t28uC04?autoplay=1');
  });

  $('#Modal2').on('hide.bs.modal', function() {
    $('#video1').attr('src', '');
  });

  $('#Modal3').on('shown.bs.modal', function() {
    $('#video2').attr('src', 'https://www.youtube.com/embed/Dn2gZgSM-zw?autoplay=1');
  });

  $('#Modal3').on('hide.bs.modal', function() {
    $('#video2').attr('src', '');
  });

  $('#Modal10').on('shown.bs.modal', function() {
    $('#video3').attr('src', 'https://www.youtube.com/embed/hcS4tgjevok?autoplay=1');
  });

  $('#Modal10').on('hide.bs.modal', function() {
    $('#video3').attr('src', '');
  });

  $('#Modal11').on('shown.bs.modal', function() {
    $('#video4').attr('src', 'https://www.youtube.com/embed/B-bNFT1P9YE?autoplay=1');
  });

  $('#Modal11').on('hide.bs.modal', function() {
    $('#video4').attr('src', '');
  });

  $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});
