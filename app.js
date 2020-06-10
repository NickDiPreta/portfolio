$(document).ready(function () {
  if (typeof $ == "undefined") {
    console.log("oops! I still have to link my jQuery properly!");
  } else {
    console.log("I did it! I linked jQuery and this js file properly!");
  }
  
  // this is the shared url
  const sheetUrl =
    "https://docs.google.com/spreadsheets/d/1IW-g-YoQ4bCoRtFq6qnDhaMBbY8Xdk_HB7TH4a4twI8/edit?usp=sharing";
  // this is how we will pull the data as Json data (javascript object notation)
  const sheetAsJSON =
    "https://spreadsheets.google.com/feeds/list/1IW-g-YoQ4bCoRtFq6qnDhaMBbY8Xdk_HB7TH4a4twI8/od6/public/values?alt=json";

  // .AJAX RETURNS a PROMISE. A promise is resolved using .then
  console.log("running before ajax");
  $.ajax({
    url: sheetAsJSON,
  })
    .then((data) => {
      console.log("data", data);
      let projects = data.feed.entry.map((project) => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t,
        };
      }); //map ends
      app(projects);
    })
    // .catch is meant to deal or handle errors
    .catch((err) => console.log("err", err));

  function app(projectsArr) {
    for (let x of projectsArr) {
      $("#portfolio-container").append(`<img class = "child" src = "${x.image}">`);
    }
  }

  console.log("running after ajax");
  const $name = $("#name");
  const $prompt = $("p");
  const $entry = $(".entry");
  const $start = $("#start");

  $(window).keypress(function (e) {
    if (e.which == 32) {
      $start.remove();
      $name.animate({ height: "100px", opacity: "0.4" });
      $prompt.fadeIn(1000);
      $entry.fadeIn(1000);
      $("#fname").focus();
    }
  });

  $("#start").click(function (e) {
    $start.remove();
    $name.animate({ height: "100px", opacity: "0.4" });
    $prompt.fadeIn(1000);
    $entry.fadeIn(1000);
    console.log("#fname".value);
    $("#fname").focus();
  });

  $(".input").keypress(function (e) {
    if (e.which == 13 && $("#fname")[0].value.length > 4) {
      $("form#login").submit();
      return false; //<---- Add this line
    }
  });

  $("#welcome").fadeIn(3000);
  $("#welcome").fadeOut(2000);

  function blink_text() {
    $(".blink").fadeOut(1000);
    $(".blink").fadeIn(1000);
  }
  setInterval(blink_text, 2000);

  var input = document.querySelector("input"); // get the input element
  input.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(input); // immediately call the function

  function resizeInput() {
    this.style.width = this.value.length + "ch";
  }
});
