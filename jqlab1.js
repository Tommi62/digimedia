$('p:eq(1)').attr('id', 'sp');
$('#fp').remove();
$('#fdiv').css(
    {
      backgroundColor: 'grey',
      color: 'white',
    });

$('button').click(function() {
  $('#sp').after('<p id="tp">Hello user</p>');
});

//$('#4p').hide();
$('#sdiv').hover(
    function() {
      //$('#4p').show;
      $('#4p').text('About to select a link...');
    },
    function() {
      //$('#4p').hide();
      $('#4p').html('&nbsp;');
    },
);
