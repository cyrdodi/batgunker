var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "rock";
} 
else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} 
else {
	computerChoice = "scissors";
} 
console.log("Computer: " + computerChoice);
//untuk mengatasi salah input
if (userChoice === "rock"){
    console.log(compare(userChoice, computerChoice));
} else if (userChoice === "paper"){
    console.log(compare(userChoice, computerChoice));
} else if (userChoice === "scissors"){
    console.log(compare(userChoice, computerChoice));
} else {
    console.log("You use the wrong words!")
}

var compare= function(choice1, choice2){
    if (choice1 === choice2){
        return "The result is a tie!"
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins";
        }
        else {
            return "scissors wins";
        }
    }
    else if (choice1 === "scissors") {
        if(choice2 === "paper") {
            return "scissors wins";
        }
        else {
            return "rock wins"
        }
    }
};
