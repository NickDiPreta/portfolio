$(document).ready(function () {
  if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }



  const $name = $("#name");
  const $prompt = $("p");
  const $entry = $(".entry");
  const $start = $("#start")

  // $name.hover(function(){
  //   $(this).css("background-color", "green");
  //   }, function(){
  //   $(this).css("background-color", "#eee2dc");
  // });

  
  $(window).keypress(function (e) {
    if (e.which == 32) {
    $start.remove();
    $name.animate({ height: "100px", opacity: "0.4" });
    $prompt.fadeIn(1000);
    $entry.fadeIn(1000);
    $( "#fname" ).focus();
    }
  });

  $( "#start" ).click(function(e) {
      $start.remove();
      $name.animate({ height: "100px", opacity: "0.4" });
      $prompt.fadeIn(1000);
      $entry.fadeIn(1000);
      $( "#fname" ).focus();
      }
  );

  $(".input").keypress(function (e) {
    if (e.which == 13) {
      consolee.log("form#login".value).
      $("form#login").submit();
      
      return false; //<---- Add this line
    }
  });



  $("#welcome").fadeIn(3000);
  $('#welcome').fadeOut(1000);


  function blink_text() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(1000);
}
setInterval(blink_text, 2000);




var input = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}




});
