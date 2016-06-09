// basic
// document.getElementById("mainArticle").className = "highlight";

// use jQuery - basic
// jQuery("#mainArticle").addClass("highlight");
// debugger
// jQuery("#mainArticle").toggleClass("highlight");

// find all elements with a particular class
// jQuery(".tourDescription").addClass("highlight");

// find all elements with a particular tag
// jQuery("li").addClass("highlight");

// find the last li

// jQuery("li:last").addClass("highlight");

// find any paragraph that contain the word "packages"
// debugger
// jQuery("p:contains('packages')").addClass("highlight");
// jQuery("p:contains('packages')").toggleClass("highlight");

// EFFECTS

// hide all paragraphs.
// $("p").hide(100);

// $("p").fadeOut(4000);

// EVENTS

// simple click
// $("#pageID").click(function() {
//   debugger
//   $("#pageID").text("You clicked me!");
// });

// add $(this) to refer to current element
//$("h2").click(function() {
//   $(this).text("You clicked me!");
//});

// add effects - this makes each paragraph fade out when clicked.
//$("p").click(function() {
//  $(this).fadeOut(2000);
//});

// Page load events - instead of window.onload()
$(document).ready(function () {
 $("#pageID").text("The DOM is fully loaded.");
});

// you don't have to worry about accidentally calling it multiple times.
$(document).ready(function () {
  $("h1").css("color","red");
});