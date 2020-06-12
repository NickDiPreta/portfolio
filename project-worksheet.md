# Project Overview

[Check out my YouTube Walkthrough!](https://youtu.be/8sMM1rnen7g)

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

Nick DiPreta Timeline

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete except priority matrix
|Day 3| API call and full form integration with redirect to homepage. Homepage layout complete.| Complete
|Day 3| All individual pages complete.| Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Complete
|Day 6| Present | Complete


## Project Description


- [DESKTOP WIREFRAME](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C06347e262ae94d0e865ba76b829ea4ab/projects/M9b82fde35f69fa5005cfb1f8b9a01b891591620460422/pages/0d7add27f3c941808853e10d92e7925e/image/0d7add27f3c941808853e10d92e7925e.png)
- [TABLET/MOBILE WIREFRAME](https://s3.amazonaws.com/assets.mockflow.com/app/wireframepro/company/C06347e262ae94d0e865ba76b829ea4ab/projects/M9b82fde35f69fa5005cfb1f8b9a01b891591620460422/pages/D2b41ddf6c274c4cb7355f03fc634c530/image/D2b41ddf6c274c4cb7355f03fc634c530.png)



#### MVP 

- Pull data using google json api
- Render data on page 
- Allow user to enter their name and contact me through website
- Retro console log-in with animations


#### PostMVP 

- Anything else that is not MVP
- Pages with console animation transitions 
- Save user log-in data


#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Regular Nav | H | 2hrs | -hr | 2hrs|
| Home Page | H | 1hrs | -hr | 4hrs|
| Contact Section | H | 2hrs | -hr | 2hrs|
| Portfolio Projects Section | H | 4hrs | -hr | 6hrs|
| Homepage Form | H | 2.5hrs| -hr | -3hrs |
| Working with API | H | 1hrs| -hr | -1hr |
| Responsive | H | 3hrs | -hr | -2hrs|
| Basic Animations/Transitions | H | 3hrs | -hr | 6hrs|
| Total | H | 18.5hrs| -hrs | 26 hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Project Hover | L | 3hr | -hr | -2hr|
| Make own logo | L | 4hr | -hr | -1hr|
| Sticky Nav | H | 2hrs | -hr | 2hrs|
| Background Images | H | 2hrs | -hr | 2hrs|
| Style Tweaks | H | 2hrs | -hr | 5hrs|
| Landing page minigame animation | L | 5hr | -hr | -hr|
| Use user name to say "Welcome User" before loading home page | L | 2hr | -hr | -hr|
| Total | H | 18hrs| -hrs | -12hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

 Lightbox: Was used to create image interactions in portfolio section.
 jQuery: Used to manipulate dom elements and import google sheet.

## Code Snippet

```
  blink animation function
  this allows my text to "blink" up to 100 times!
  function blink_text() {
    let i = 0;
    while (i < 100) {
      $(".blink").fadeOut(1000);
      $(".blink").fadeIn(1000);
      i++;
    }
  }
  setTimeout(blink_text, 4000);
```

## Issues and Resolutions
**ERROR**: Failed to load resource: the server responded with a status of 404 ()
**RESOLUTION**: Fill all fields in the google sheet so all inputs are populated.

**BUG**: Some compatibility issue with the different pages of my website's JS. 
**RESOLUTION**: Split the JS of each page into different JS files.

**FORMAT**: There is no background opacity attribute in css.
**RESOLUTION**: Manually adjusted opacity of uploaded images.
