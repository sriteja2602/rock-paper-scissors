

function computerPlay() {
    var arr = ["rock", "paper",
                "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

var computerSelection=computerPlay();
console.log(computerSelection);
function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection=="rock" && computerSelection=="paper"){
        var p=document.getElementById("show");
        p.innerHTML="Player wins";
    }
    else if(playerSelection=="rock" && computerSelection=="rock"){
        var p=document.getElementById("show");
        p.innerHTML="It's a draw";
    }
    else{
        var p=document.getElementById("show");
        p.innerHTML="Player wins";
    }
  }

function clicked(id){
    var playerSelection=id.id;
    console.log(playerSelection);
    playRound(computerSelection,playerSelection);
    return playerSelection;
}