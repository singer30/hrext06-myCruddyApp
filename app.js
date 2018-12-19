
$(document).ready(function(){
  console.log('jQuery loaded');
  // write to local storage from input when button save clicked
  $('.btn-submit').on('click', function(){
    var pokemon = $('.text-entry').val()
    if (localStorage.hasOwnProperty(pokemon)) {
     $('.list-display-field').text('You already caught ' + pokemon);
   } else {
    localStorage.setItem($('.text-entry').val(), $('.text-entry').val());
    var myItemInStorage = localStorage.getItem($('.text-entry').val());
    $('.list-display-field').text('You caught ' + pokemon);
    }

  });

  // delete from local storage when delete button clicked
  $('.btn-delete').on('click', function(){
    localStorage.removeItem('inputFieldValue');
  });
  $('.btn-delete-all').on('click', function(){
    localStorage.clear();
  });
  $('.btn-display-all').click(function(){
    $('.list-display-field').html('');
    var caughtPokemon = Object.keys(localStorage)
    $('.list-display-field').text('Your Pokémon ' + caughtPokemon);
    
  })
   
});


