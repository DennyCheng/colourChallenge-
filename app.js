$(document).ready(function(){

  // $("#empContainer").append( '<div class="foo green"></div>');
  // $("#empContainer").append( '<div class="foo red"></div>');
  // $("#empContainer").append( '<div class="foo blue"></div>');
  // $("#empContainer").append( '<div class="foo yellow"></div>');
  $('#clickToCreate').on("click",'.addColors',colorAdd);

  function colorAdd(){
    $("#empContainer").append( '<div class="foo green"></div>');
    $("#empContainer").append( '<div class="foo red"></div>');
    $("#empContainer").append( '<div class="foo blue"></div>');
    $("#empContainer").append( '<div class="foo yellow"></div>');
    $(this).remove('.addColors');
  };

  function randomNumber(min, max){
      return Math.floor(Math.random() * (1 + max - min) + min);
  };

var colorChooser = randomNumber(0,3);

var currentlyChosen;

switch(colorChooser){
  case  0:
    $("#clickToCreate").append('<p>Blue</p>');
    currentlyChosen = "blue";
    break;
  case 1:
    $("#clickToCreate").append('<p>Red</p>');
    currentlyChosen = "red";
    break;
  case 2:
    $("#clickToCreate").append('<p>Green</p>');
    currentlyChosen = "green";
    break;
  case 3:
    $("#clickToCreate").append('<p>Yellow</p>');
    currentlyChosen = "yellow";
    break;
}
$("#empContainer").on("click",".foo",function(){
  //looks within the empContainer and checks on click if it has
  //.foo class item and THEN funs the function
  //initially (".foo").on("click",function(); since it's using on I can have
  //multiple 
  console.log("hello");
  if($(this).hasClass(currentlyChosen)){
    $("#result").text('You got it');
  }
  else{
    $("#result").text("Try again");
  };

});

});
