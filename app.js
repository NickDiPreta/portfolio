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

  const $name = $("#name");
  const $prompt = $("p");
  const $entry = $(".entry");
  const $start = $("#start");

  $("#welcome").fadeIn(3000);
  $("#welcome").fadeOut(2000);

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
  function blink_text() {
    let i = 0;
    while (i < 100) {
      $(".blink").fadeOut(1000);
      $(".blink").fadeIn(1000);
      i++;
    }
  }
  setTimeout(blink_text, 4000);

  $("#name").classList.add("screen-gameboy-text");

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position

  var form = document.getElementById("login");

  var status = document.getElementById("my-form-status");

  function success() {
    form.reset();
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
});
