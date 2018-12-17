$(document).ready(function(){
  console.log('jQuery loaded');

  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    localStorage.setItem($('.text-entry').val(), $('.text-entry').val());
    var myItemInStorage = localStorage.getItem($('.text-entry').val());
    console.log('myItemInStorage', myItemInStorage);

    // display the value here
    $('.list-display-field').text(myItemInStorage); // ??

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });

});