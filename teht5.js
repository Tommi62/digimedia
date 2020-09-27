'use strict';
const address = 'http://api.tvmaze.com/search/shows?q=';
let firstTime = true;
$('.btn').on('click', function() {
  console.log(address);
  const value = $('.form-control').val();
  console.log(value);
  const url = address + value;
  console.log(url);
  $.ajax(url, {
    dataType: 'json',
    timeout: 500,
    success: function(data, status, xhr) {
      console.log('höhööö');
      if(data.length !== 0){
        if (firstTime) {
          $('.row:first').remove();
          firstTime = false;
        }
        $('.row').empty();
      }
      for (let i = 0; i < data.length; i++) {
        if (i % 2 == 0) {
          $('.row:first').append('<section></section>');
          $('section:last').addClass('row');
        }
        $('.row:last').append('<article></article>');
        $('article:last').addClass('col-sm-6 rounded');

        $('.col-sm-6:last').append('<h1></h1>');
        $('h1:last').append(data[i].show.name);

        if (data[i].show.officialSite) {
          $('.col-sm-6:last').append('<p></p>');
          $('p:last').append('<a></a>');
          $('a:last').
              attr('href', data[i].show.officialSite).
              append(data[i].show.officialSite);
        }

        if (data[i].show.image) {
          $('.col-sm-6:last').append('<img src="">');
          $('img:last').attr('src', data[i].show.image.medium);
          $('.col-sm-6:last').append('<br> <br>');
        }

        if (data[i].show.summary) {
          $('.col-sm-6:last').append('<div></div>');
          $('div:last').addClass('sum');
          $('.sum:last').append(data[i].show.summary);
        }

        if (data[i].show.genres.length != 0) {
          $('.col-sm-6:last').append('<h3></h3>');
          $('h3:last').append('Genres');
          for (let j = 0; j < data[i].show.genres.length; j++) {
            $('.col-sm-6:last').append('<h6></h6>');
            $('h6:last').addClass('genres');
            $('.genres:last').append(data[i].show.genres[j]);
          }
        }
        $('.col-sm-6:last').append('<br>');

      }
    },
    error: function(jqXhr, textStatus, errorMessage) {
      $('h1').append('Error: ' + errorMessage);
    },

  });
});

