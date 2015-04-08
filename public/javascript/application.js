$(document).ready(function() {

// start of search function
  $('#go-search').on('click', function(){
    var input = $('#search-input').val();
    // console.log(input);
    var data = {search: input};

  $.ajax({
    url: '/search',
    method: 'GET',
    data: data
    }).done(function(contacts){
      $('#contact-info > h3').empty();
        $.each(contacts, function(index, value){
           $('#contact-info').append( '<h3>' + value.firstname + ' ' + value.lastname + ' ' + value.phone + ' ' + value.email + '</h3>');
        });
      });
  });
// end of search function

// start of list all function
  $('#list-all').on('click', function(){
    $.ajax({
      url: '/list',
      method: 'GET'
    }).done(function(contacts){
        $('#contact-info > h3').empty();
        $.each(contacts, function(index, value){
        $('#contact-info').append( '<h3>' + value.firstname + ' ' + value.lastname + ' ' + value.phone + ' ' + value.email + '</h3>');
      });
    });
  });
//  end of list all function

// start of create contact


// end of create contact

});
