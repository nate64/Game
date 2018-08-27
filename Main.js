$(document).ready(function() {

//guess the color the computer is thinking of
//player chooses from 3 random colors
  //if player guesses on first try, they win,
    //background changes to the correct color
  //else computer wins 
//program refreshes without page reload
  
//Variables
var left = $("#left")
var center = $("#center")
var right = $("#right")
var black = black 
var red = red 
var green = green
var blue = blue
var white = white
var colorList = ["black", "red", "green", "blue", "white"] //add more colors
var random3Colors = []
var randomWinningColor =[]
var userChoice

var randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; 
  random3Colors.push(randomColor1)
randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; 
  random3Colors.push(randomColor1)
randomColor1 = colorList[Math.floor(Math.random()* colorList.length)]; 
  random3Colors.push(randomColor1)



//Functions

$(function() {
function random3() {
  random3Colors = colorList[Math.floor(Math.random(3)* colorList.length)]; 
  return random3Colors
  
  }
  })

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