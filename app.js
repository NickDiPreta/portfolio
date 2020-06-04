$(document).ready(function () {
  if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }

  const $name = $("h1");
  const $prompt = $("p");
  const $entry = $(".entry");
  $name.click(function () {
    $name.animate({ height: "100px", opacity: "0.4" }, "slow");
    $prompt.toggle();
    $entry.toggle();
  });

  $(".input").keypress(function (e) {
    if (e.which == 13) {
      $("form#login").submit();
      return false; //<---- Add this line
    }
  });

  $("#welcome").fadeIn(3000);
});
