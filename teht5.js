'use strict';
const address = 'http://api.tvmaze.com/search/shows?q=';

$('#sbutton').on('click', function() {
  $('#all').empty();
  const value = $('#stext').val();
  console.log(value);
  const url = address + value;
  console.log(url);
  $.ajax(url, {
    dataType: 'json',
    timeout: 500,
    success: function(data, status, xhr) {
      for (let i = 0; i < data.length; i++) {
        $('#all').append('<h1></h1>');
        $('h1:last').append(data[i].show.name);

        if (data[i].show.officialSite) {
          $('#all').append('<p></p>');
          $('p:last').append(data[i].show.officialSite);
        }

        if (data[i].show.image) {
          $('#all').append('<img src="">');
          $('img:last').attr('src', data[i].show.image.medium);
        }

        if (data[i].show.summary) {
          $('#all').append('<div></div>').addClass('sum');
          $('.sum:last').append(data[i].show.summary);
        }

        if (data[i].show.genres.length != 0) {
          $('#all').append('<h3></h3>');
          $('h3:last').append('Genret');
          for (let j = 0; j < data[i].show.genres.length; j++) {
            $('#all').append('<div></div>').addClass('genres');
            $('.genres:last').append(data[i].show.genres[j]);
          }
        }
        $('#all').append('<br>');
      }
    },
    error: function(jqXhr, textStatus, errorMessage) {
      $('h1').append('Error: ' + errorMessage);
    },

  });
});

