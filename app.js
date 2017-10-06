// gets a new object (the architecture allows you to not have to use the 'new' keyword here)
var g = G$("John", "Doe");

// use chainable methods
g
  .greet()
  .setLang("es")
  .greet(true)
  .log();

// use the object on the click of the login button
$("#login").click(function() {
  // create a new 'Greetr' object (pretend you know the name from the login)
  var loginGrtr = G$("John", "Doe");

  // hide the login on the screen
  $("logindiv").hide();

  // send a HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
  loginGrtr
    .setLang($("#lang").val())
    .HTMLGreeting("#greeting", true)
    .log();
});
