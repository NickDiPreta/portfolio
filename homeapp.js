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
            shortTitle: project.gsx$shorttitle.$t
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
          data-lightbox="image-${x}" data-title= "${projectsArr[x].title}"> 
          <p>${projectsArr[x].shortTitle}</p>
          <img class ="child" src="${projectsArr[x].image}" alt = "Project item image"> </a>
          `);
      }
    }
  // Get the navbar
  var about = document.getElementById("sticky-start");
  
  // Get the offset position of the navbar
  var sticky = about.offsetTop;
  window.onscroll = function() {myFunction()};
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.remove("hidden-navbar");
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
        navbar.classList.add("hidden-navbar")
      }
    }
  
    console.log("running after ajax");
    const $name = $("#name");
    const $prompt = $("p");
    const $entry = $(".entry");
    const $start = $("#start");
  
  
  
    $("#welcome").fadeIn(3000);
    $("#welcome").fadeOut(2000);
  


  
  });
  