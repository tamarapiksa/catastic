$("#content").append("<h1>Catastic</h1>" + 
  "<img src=http://i.telegraph.co.uk/multimedia/archive/02830/cat_2830677b.jpg>" +
  "<p>This is the bestest interwebs site ever created!</p>");

$("#content").append("" +
    '<button id="home">Home</button>' +
    '<button id="menu">Menu</button>' +
    '<button id="contact">Contact</button>'
  );

$('#home').click(function(){
  $('content').empty();
  $('content').append('<Welcome to Marrow</p>');
});