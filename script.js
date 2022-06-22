//Sanity Check
// console.log("Hallo")

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

//FUNCTION TO ALTERNATE COLOR CHANGE
let state = false

function colorClick() {
    if (state == false) {
        //make them red
        console.log("red")
        //and flip the switch
        state = true
        return
    }
    if (state == true) {
        //make them blue
        console.log("blue")
        //and flip the switch
        state = false
        return
    }
}

//FUNCTION TO CHANGE COLOR TO RED
const redClick = function(x) {
    x.classList.add('red')
}
//FUNCTION TO CHANGE COLOR TO BLUE
const blueClick = function(x) {
    x.classList.add('blue')
}

square1.addEventListener("click", colorClick)
//EVENT LISTENERS
// //MAKE THEM RED
// square1.addEventListener("click", () => {redClick(square1)})
// square2.addEventListener("click", () => {redClick(square2)})
// square3.addEventListener("click", () => {redClick(square3)})
// square4.addEventListener("click", () => {redClick(square4)})
// square5.addEventListener("click", () => {redClick(square5)})
// square6.addEventListener("click", () => {redClick(square6)})
// square7.addEventListener("click", () => {redClick(square7)})
// square8.addEventListener("click", () => {redClick(square8)})
// square9.addEventListener("click", () => {redClick(square9)})
// //MAKE THEM BLUE
// square1.addEventListener("click", () => {blueClick(square1)})
// square2.addEventListener("click", () => {blueClick(square2)})
// square3.addEventListener("click", () => {blueClick(square3)})
// square4.addEventListener("click", () => {blueClick(square4)})
// square5.addEventListener("click", () => {blueClick(square5)})
// square6.addEventListener("click", () => {blueClick(square6)})
// square7.addEventListener("click", () => {blueClick(square7)})
// square8.addEventListener("click", () => {blueClick(square8)})
// square9.addEventListener("click", () => {blueClick(square9)})