$(document).ready(function() {


//guess the color the computer is thinking of
//player chooses from 3 random colors
  //if player guesses on first try, they win,
    //background changes to the correct color
  //else computer wins 
//program refreshes without reload

//tasks:
//pull 3 random elements from array, place in new array
  

//Variables
var left = $("#left")
var center = $("#center")
var right = $("#right")
var black = black //rgb values dont work
var red = red 
var green = green
var blue = blue
var white = white
var colorList = ["black", "red", "green", "blue", "white"] //add more colors
var random3Colors = []
var randomWinningColor 
var userChoice



//Functions
//pick 3 random colors from colorList
  //pass 3 colors to random3Colors
  //randomly choose 1 color, pass to randomWinningColor
  //also pass those 3 color names to 3 buttons


//sets 3 colors to guess from
function random3Colors() {
  random3Colors = colorList.Splice[Math.floor(math.random()* colorList.length), 3 ]; //.length?? need 3 values
  console.log(colorList.Splice)
  console.log(random3Colors)
  debugger
  //assign each to 1 of 3 buttons - left, center, right

  }

//when user clicks a button...
left.on('click', function() {
  userChoice = left
  //if-else?
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log(randomWinningColor)
  })

center.on('click', function() {
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log(randomWinningColor)
  })

right.on('click', function() {
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log(randomWinningColor)
  })





})