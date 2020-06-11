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
  var animationInterval;
  var spriteSheet = document.getElementById("sprite-image");
  var widthOfSpriteSheet = 476;
  var widthOfEachSprite = 34;

  function stopAnimation() {
    clearInterval(animationInterval);
  }

  function startAnimation() {
    var position = widthOfEachSprite; //start position for the image
    const speed = 700; //in millisecond(ms)
    const diff = widthOfEachSprite; //difference between two sprites

    animationInterval = setInterval(() => {
      spriteSheet.style.backgroundPosition = `-${position}px 0px`;

      if (position < widthOfSpriteSheet) {
        position = position + diff;
      } else {
        //increment the position by the width of each sprite each time
        position = widthOfEachSprite;
      }
      //reset the position to show first sprite after the last one
    }, speed);
  }

  //Start animation
  startAnimation();
  
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
    let i = 0
    while (i < 100){
    $(".blink").fadeOut(1000);
    $(".blink").fadeIn(1000);
    i++;
    }
  }
  setTimeout(blink_text,7000)

  
  $("#name").classList.add("screen-gameboy-text" );
window.onscroll = function() {myFunction()};

// Get the navbar
var about = document.getElementById("sticky-start");

// Get the offset position of the navbar
var sticky = about.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("hidden-navbar");
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("hidden-navbar")
  }
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
