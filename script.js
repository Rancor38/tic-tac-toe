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
        y.classList.add('red')
        y.classList.add('draw')
        y.classList.remove('blue')
        //and flip the switch
        state = true
        return
    }
    else {
        //make them blue
        y.classList.add('blue')
        y.classList.add('draw')
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

// OVERLAY FUNCTIONS FOR DECLARE VICTORY IF CLASSLIST COMBINATION IS CORRECT
// RED
onRed = () => {
    if /* 1, 2, 3*/ (square1.classList.contains('red') && square2.classList.contains('red') && square3.classList.contains('red')) {
    document.getElementById("overlay__red").style.display = "block";
    }
    else if/*4, 5, 6*/ (square4.classList.contains('red') && square5.classList.contains('red') && square6.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*7, 8, 9*/ (square7.classList.contains('red') && square8.classList.contains('red') && square9.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*1, 4, 7*/ (square1.classList.contains('red') && square4.classList.contains('red') && square7.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*2, 5, 8*/ (square2.classList.contains('red') && square5.classList.contains('red') && square8.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*3, 6, 9*/(square3.classList.contains('red') && square6.classList.contains('red') && square9.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*1, 5, 9*/(square1.classList.contains('red') && square5.classList.contains('red') && square9.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else if/*3, 5, 7*/(square3.classList.contains('red') && square5.classList.contains('red') && square7.classList.contains('red')) {
        document.getElementById("overlay__red").style.display = "block";
        }
    else {}
  }
  //BLUE
  onBlue = () => {
    if /* 1, 2, 3*/ (square1.classList.contains('blue') && square2.classList.contains('blue') && square3.classList.contains('blue')) {
    document.getElementById("overlay__blue").style.display = "block";
    }
    else if/*4, 5, 6*/ (square4.classList.contains('blue') && square5.classList.contains('blue') && square6.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*7, 8, 9*/ (square7.classList.contains('blue') && square8.classList.contains('blue') && square9.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*1, 4, 7*/ (square1.classList.contains('blue') && square4.classList.contains('blue') && square7.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*2, 5, 8*/ (square2.classList.contains('blue') && square5.classList.contains('blue') && square8.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*3, 6, 9*/(square3.classList.contains('blue') && square6.classList.contains('blue') && square9.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*1, 5, 9*/(square1.classList.contains('blue') && square5.classList.contains('blue') && square9.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else if/*3, 5, 7*/(square3.classList.contains('blue') && square5.classList.contains('blue') && square7.classList.contains('blue')) {
        document.getElementById("overlay__blue").style.display = "block";
        }
    else {}
  } 
  //DRAW
onDraw = () => {
    if (square1.classList.contains('draw') && square2.classList.contains('draw') && square3.classList.contains('draw') && square4.classList.contains('draw') && square5.classList.contains('draw') && square6.classList.contains('draw') && square7.classList.contains('draw') && square8.classList.contains('draw') && square9.classList.contains('draw')) {
        document.getElementById("overlay__draw").style.display = "block";
    }
    else {}
}

//LISTEN FOR CHANGES IN CSS CLASS-LIST, AND IF THEY LINE UP, DECLARE VICTORY
// RED
square1.addEventListener("click", () => {onRed()})
square2.addEventListener("click", () => {onRed()})
square3.addEventListener("click", () => {onRed()})
square4.addEventListener("click", () => {onRed()})
square5.addEventListener("click", () => {onRed()})
square6.addEventListener("click", () => {onRed()})
square7.addEventListener("click", () => {onRed()})
square8.addEventListener("click", () => {onRed()})
square9.addEventListener("click", () => {onRed()})
// BLUE
square1.addEventListener("click", () => {onBlue()})
square2.addEventListener("click", () => {onBlue()})
square3.addEventListener("click", () => {onBlue()})
square4.addEventListener("click", () => {onBlue()})
square5.addEventListener("click", () => {onBlue()})
square6.addEventListener("click", () => {onBlue()})
square7.addEventListener("click", () => {onBlue()})
square8.addEventListener("click", () => {onBlue()})
square9.addEventListener("click", () => {onBlue()})
// DRAW
square1.addEventListener("click", () => {onDraw()})
square2.addEventListener("click", () => {onDraw()})
square3.addEventListener("click", () => {onDraw()})
square4.addEventListener("click", () => {onDraw()})
square5.addEventListener("click", () => {onDraw()})
square6.addEventListener("click", () => {onDraw()})
square7.addEventListener("click", () => {onDraw()})
square8.addEventListener("click", () => {onDraw()})
square9.addEventListener("click", () => {onDraw()})