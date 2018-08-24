$(document).ready(function() {

//guess the color the computer is thinking of
//player chooses from 3 random colors
  //if player guesses on first try, they win,
    //background changes to the correct color
  //else computer wins 
//program refreshes without page reload

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
var randomWinningColor =[]
var userChoice

var randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; //.length?? need 3 values
  random3Colors.push(randomColor1)
randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; //.length?? need 3 values
  random3Colors.push(randomColor1)
randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; //.length?? need 3 values
  random3Colors.push(randomColor1)
debugger

//Functions
//pick 3 random colors from colorList
  //pass 3 colors to random3Colors
  //randomly choose 1 color, pass to randomWinningColor
  //also pass those 3 color names to 3 buttons


$(function() {
function random3() {
  random3Colors = colorList[Math.floor(Math.random(3)* colorList.length)]; //.length?? need 3 values
  debugger
  return random3Colors
  
  // console.log(colorList.splice)
  console.log(random3Colors)
  //assign each to 1 of 3 buttons - left, center, right
  }
  })


//when user clicks a button...
left.on('click', function(){
  userChoice = left
  //if-else?
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log (randomWinningColor)
  })

center.on('click', function() {
  userChoice = center
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log(randomWinningColor)
  })

right.on('click', function() {
  randomWinningColor = random3Colors[Math.floor(Math.random() * random3Colors.length)];
  console.log(randomWinningColor)
  })





})