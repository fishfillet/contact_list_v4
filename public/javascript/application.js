$(document).ready(function() {

// start of search function
  $('#go-search').on('click', function(){
    var input = $('#search-input').val();
    var data = {search: input};

  $.ajax({
    url: '/contacts/search',
    method: 'GET',
    data: data,
    dataType: 'json'
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
      url: '/contacts/list',
      method: 'GET',
      dataType: 'json'
    }).done(function(contacts){
        $('#contact-info').empty();
        $.each(contacts, function(index, value){
        $('#contact-info').append( '<h3>' + value.firstname + ' ' + value.lastname + ' ' + value.phone + ' ' + value.email + '</h3>');
      });
    });
  });
//  end of list all function

// start of create contact
  $('#new-contact').on('submit', function(){
    var first_name = $('#firstname').val();
    var last_name = $('#lastname').val();
    var phone_number = $('#phone-number').val();
    var email_address = $('#email').val();

    var postParams = {firstname: first_name,
                      lastname: last_name,
                      phone: phone_number,
                      email: email_address };

    $.ajax({
      url: '/contacts/new',
      method: 'POST',
      data: postParams
    }).done(function(contacts){
        console.log(contacts);
        alert("You added: " + contacts.firstname);
    });
  });
// end of create contact

});
