$(document).ready(function() {

// start of search function
  $('#go').on('click', function(){
    var input = $('#search-input').val();
    // console.log(input);
    var data = {search: input};

  $.ajax({
    url: '/search',
    method: 'GET',
    data: data
    }).done(function(contacts){
      $('#contact-info').empty();
        $.each(contacts, function(index, value){
           $('#contact-info').append( '<h3>' + value.firstname + ' ' + value.lastname + ' ' + value.phone + ' ' + value.email + '</h3>');
        });
      });
  });
// end of search function


});
