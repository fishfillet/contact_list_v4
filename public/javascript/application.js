$(document).ready(function() {

// start of search function
  $('#go-search').on('click', function(){
    var input = $('#search-input').val();
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

// start of list all function
  $('#list-all').on('click', function(){
    $.ajax({
      url: '/list',
      method: 'GET'
    }).done(function(contacts){
        $('#contact-info').empty();
        $.each(contacts, function(index, value){
        $('#contact-info').append( '<h3>' + value.firstname + ' ' + value.lastname + ' ' + value.phone + ' ' + value.email + '</h3>');
      });
    });
  });
//  end of list all function

// start of create contact
  $('#create-contact').on('click', function(){
    var first_name = $('#firstname').val();
    var last_name = $('#lastname').val();
    var phone_number = $('#phone-number').val();
    var email_address = $('#email').val();

    var postParams = {firstname: first_name,
                      lastname: last_name,
                      phone: phone_number,
                      email: email_address };

    $.ajax({
      url: '/new',
      method: 'POST',
      data: postParams
    }).done(function(contacts){
        alert("You added: " + contacts)
    });
  });
// end of create contact

});
