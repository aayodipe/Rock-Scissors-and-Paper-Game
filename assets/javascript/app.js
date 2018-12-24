let wins = 0;
let losses = 0;
let gameLeft  = 10;
const letters = ["R", "S", "P"]


// generate random number
function computerChoice (){
let randomIndex= Math.floor(Math.random()*3)
let compChoice = letters[randomIndex]
console.log(compChoice)
}
//listen to user keypress
document.onkeyup = function(event){
     let userChoice = event.key
     let userChoiceToCap = userChoice.toUpperCase()
     console.log(userChoiceToCap)
     computerChoice ()
     
}
// convert user key press to upper case
// compare user key press to computer generated key
// if user key is the same as computer key, inncrement winn by 1 
// if user and computer are not thesame, increment loss by 1
//play again
