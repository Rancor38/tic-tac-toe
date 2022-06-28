//CONST ELEMENTS
const square1 = document.querySelector("#box1")
const square2 = document.querySelector("#box2")
const square3 = document.querySelector("#box3")
const square4 = document.querySelector("#box4")
const square5 = document.querySelector("#box5")
const square6 = document.querySelector("#box6")
const square7 = document.querySelector("#box7")
const square8 = document.querySelector("#box8")
const square9 = document.querySelector("#box9")
const resetButton = document.querySelector("#reset")

//FUNCTION TO ALTERNATE COLOR CHANGE
//state is the state of the switch between red and blue
let state = false
//triggered is whether or not a particular function has happened before
let triggered = false
//y is the input for which square is being clicked/changed in color
let y

//THE FUNCTION TO ALTERNATE AND CHANGE THE SQUARE COLORS
function colorClick(y) {
    if (state === false) {
        //make them red
        console.log("red")
        y.classList.add('red')
        y.classList.remove('blue')
        //and flip the switch
        state = true
        return
    }
    else {
        //make them blue
        console.log("blue")
        y.classList.add('blue')
        y.classList.remove('red')
        //and flip the switch
        state = false
        return
    }
}

//FUNCTION TO CHANGE COLOR TO RED
// const redClick = function(x) {
//     x.classList.add('red')
// }
//FUNCTION TO CHANGE COLOR TO BLUE
// const blueClick = function(x) {
//     x.classList.add('blue')
// }
//FUNCTION TO ALTERNATE COLOR TEST LISTENER
square1.addEventListener("click", () => {colorClick(square1)})
square2.addEventListener("click", () => {colorClick(square2)})
square3.addEventListener("click", () => {colorClick(square3)})
square4.addEventListener("click", () => {colorClick(square4)})
square5.addEventListener("click", () => {colorClick(square5)})
square6.addEventListener("click", () => {colorClick(square6)})
square7.addEventListener("click", () => {colorClick(square7)})
square8.addEventListener("click", () => {colorClick(square8)})
square9.addEventListener("click", () => {colorClick(square9)})


//ADD RESET FUNCTION
resetFunction = () => {
    window.location.reload(true)  
}
//ADD LISTENER FOR RESET BUTTON
resetButton.addEventListener("click", resetFunction)

// OVERLAY FUNCTIONS FOR DECLARE VICTORY
// RED
function on() {
    document.getElementById("overlay__red").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay__red").style.display = "none";
  }
  //BLUE
  function on() {
    document.getElementById("overlay__blue").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay__blue").style.display = "none";
  }

// ADD A MUTATIONOBSERVER TO LISTEN FOR CHANGES IN CSS, AND IF THEY LINE UP, DECLARE VICTORY