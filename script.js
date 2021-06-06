window.addEventListener('DOMContentLoaded', ()=> {
    ///constants
const choices = document.querySelectorAll('.choice'),
    score = document.querySelector('#score'),
    modal = document.querySelector('.modal'),
    result = document.querySelector('#result'),
    scoreBoard = {
        player:0,
        computer:0 , 
        draw :0
    };

//functions


//Play game
function play(event){
    restart.style.display = 'inline-block';
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner, computerChoice);
   
}

//Get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if(rand < 0.33) {
        return 'rock';
    }else if ( rand <= 0.67 && rand > 0.33 ){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//Get winner
function getWinner(p,c){
    if(p === c) return 'draw';
    else if (p === 'rock'){
        if(c === 'paper') return 'computer';
        else return 'player';

    }
    else if (p === 'paper'){
        if(c === 'scissors') return 'computer';
        else return 'player';

    }
    else if (p === 'scissors'){
        if(c === 'rock') return 'computer';
        else return 'player';

    }

}

//Show winner
function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreBoard.player++;
        result.innerHTML = `
            <h1 class="text-win">You win </h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer choice: <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
        `;
    }else if(winner === 'computer') {
        scoreBoard.computer++;
        result.innerHTML =  `
        <h1 class="text-lose">You lose </h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer choice: <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
    `;
    }
    else { 
        scoreBoard.draw++;
        result.innerHTML =  `
        <h1 class="text-lose"> It is a Draw</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer choice: <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p> `; 
    }
    score.innerHTML = `
        <p>Player:${scoreBoard.player}</p>
        <p>Computer:${scoreBoard.computer}</p>
        <p>Draw:${scoreBoard.draw}</p>
    `;
    modal.style.display = 'block';
}

//Restart game
function restartGame()
{
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    scoreBoard.draw = 0;
    score.innerHTML = `
        <p>Player:${scoreBoard.player}</p>
        <p>Computer:${scoreBoard.computer}</p>
        <p>Draw:${scoreBoard.computer}</p>
    `;
    
}
//clearModel 
function clearModal(event){
    if(event.target == modal ) modal.style.display = 'none';
}

//Event listeners
choices.forEach(choice =>  choice.addEventListener('click', play)
);
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
});
