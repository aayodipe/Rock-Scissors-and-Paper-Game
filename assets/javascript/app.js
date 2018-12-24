
let wins = 0;
let losses = 0;
let ties = 0;
let gameLeft  = 10;
const letters = ["R", "S", "P"]
let isUserChoice = false
let compChoice
//gets html
const user = document.querySelector("#user");
const computer = document.querySelector("#computer")
const win = document.querySelector("#win")
const loss = document.querySelector("#loss")
const tie = document.querySelector("#ties")
const live = document.querySelector("#live")
//updating html
live.textContent = "Game Remaining: " +gameLeft;
// generate random number
function computerChoice (){
let randomIndex= Math.floor(Math.random()*3)
compChoice = letters[randomIndex]
computer.textContent = "Computer Choice: " + compChoice
}



//listen to user keypress
document.onkeyup = function(event){
 
   
     let userChoice = event.key;
     let userChoiceToCap = userChoice.toUpperCase()
     // deactives other keys
     for (var i = 0; i < letters.length; i++){;
     if (letters.indexOf(userChoiceToCap) === i){
          isUserChoice = true
          gameLeft--
          live.textContent = "Game Remaining: " + gameLeft;

     user.textContent = "User Choice: " + userChoiceToCap;
    
     //generate computer choice after the user keypressed
      computerChoice ();
      //compare computer and user answer
     
      if ((userChoiceToCap === "R" && compChoice === "S") || (userChoiceToCap === "P" && compChoice === "R") || (userChoiceToCap === "S" && compChoice === "P")){
         
          wins++
          win.textContent ="Wins: " + wins;

      }else if ((compChoice === "R" && userChoiceToCap === "S") || (compChoice === "P" && userChoiceToCap === "R") || (compChoice === "S" && userChoiceToCap === "P")){
          losses++
          loss.textContent = "Losses: " + losses;
      }
      else{
           ties++
           tie.textContent = "Ties: " + ties;
      
      }
     }}
     if (gameLeft ===0){
          isUserChoice = false
        if (wins  > losses ){
             alert(" You won!!!" )
             startGame()
        }else if(wins < losses){
             alert("Sorry you loss")
             startGame()
        }
        else {
             alert("You tie with Computer. Try Again")
             startGame()
        }

     }
     
}
function startGame(){
   wins = 0;
   losses = 0;   
   ties = 0;
   gameLeft  = 10;
   live.textContent = "Game Remaining: " + gameLeft;
   win.textContent ="Wins: " + wins;
   loss.textContent = "Losses: " + losses;
   tie.textContent = "Ties: " + ties;
}



