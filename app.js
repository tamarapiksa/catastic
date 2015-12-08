$("#container").append("<h1>Catastic</h1>" + 
  "<img src=http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg>" +
  "<p>This is the bestest interwebs site ever created!</p>");

$("#container").append(" " +
    '<button id="home">Home</button>' +
    '<button id="names">Cats</button>' +
    '<button id="contact">Contact</button>'
  );

$('#home').click(function(){
  $('#content').empty();
  $('#content').append('<p>Welcome to Catastic</p>');
});

$('#names').click(function(){
  $('#content').empty();
  $('#content').append('<li>Twinkles</li>' + '<li>Buttercup</li>');
});

$('#contact').click(function(){
  $('#content').empty();
  $('#content').append('<p>Call me anytime.</p>');
})
