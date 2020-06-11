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
    for (let x in projectsArr) {
      console.log(x);
      $("#portfolio-container").append(`
        <a href="${projectsArr[x].description}"
        data-lightbox="image-${x}" data-title= "${projectsArr[x].title}"> <img class ="child" src="${projectsArr[x].image}" alt = "Project item image"> </a>
        `);
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


  $("#welcome").fadeIn(3000);
  $("#welcome").fadeOut(2000);

  function blink_text() {
    $(".blink").fadeOut(1000);
    $(".blink").fadeIn(1000);
  }
  setInterval(blink_text, 2000);

  //create if statement for logic of when to run this
  // if != null add event listener
  var input = document.querySelector("input"); // get the input element
  input.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
  resizeInput.call(input); // immediately call the function

  function resizeInput() {
    this.style.width = this.value.length + "ch";
  }

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
