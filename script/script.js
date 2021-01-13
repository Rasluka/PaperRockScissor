'use strict';

const paperBtt = document.getElementById('paperBtt');
const rockBtt = document.getElementById('rockBtt');
const scissorBtt = document.getElementById('scissorBtt');
const selectedOpt = document.getElementById('selectedOption');
const cpuChoiceImg = document.getElementById('cpuChoice');
const winnerMessage = document.querySelector('.winMessage');
const playerScoreElement = document.getElementById('playerScore');
const cpuScoreElement = document.getElementById('cpuScore');
const drawScoreElement = document.getElementById('drawScore');
const subMsg = document.querySelector('.subMessage');

const availableOptions = ['paper', 'rock', 'scissor'];


let playerScore = 0;
let cpuScore = 0;
let drawScore = 0;


let playerOpt;
let cpuOpt;


paperBtt.addEventListener('click', function(){
    selectedOpt.src = './images/paper.png';

    playerOpt = 'paper';
    cpuOpt = generateCPUChoice();

    compareChoices(playerOpt, cpuOpt);
    console.log(playerOpt, cpuOpt);
})

rockBtt.addEventListener('click', function(){
    selectedOpt.src = './images/rock.png';
    generateCPUChoice();

    playerOpt = 'rock';
    cpuOpt = generateCPUChoice();

    compareChoices(playerOpt, cpuOpt);
    console.log(playerOpt, cpuOpt);
})

scissorBtt.addEventListener('click', function(){
    selectedOpt.src = './images/scissor.png';
    generateCPUChoice();

    playerOpt = 'scissor';
    cpuOpt = generateCPUChoice();

    compareChoices(playerOpt, cpuOpt);
    console.log(playerOpt, cpuOpt);
})

const generateCPUChoice = function(){
    let ran = Math.trunc(Math.random()*3);

    let cpuChoice = availableOptions[ran];

    cpuChoiceImg.src = `./images/${cpuChoice}.png`

    return cpuChoice;
}

const compareChoices = function(playerOpt, cpuOpt){
    if(playerOpt === 'paper'){
        if(cpuOpt === 'paper'){
            winnerMessage.textContent = 'It is a draw! Paper = Paper';
            drawScoreElement.textContent = ++drawScore;
        }
        else if(cpuOpt === 'rock'){
            winnerMessage.textContent = 'Player 1 win! Paper > Rock';
            playerScoreElement.textContent = ++playerScore;
        }
        else if(cpuOpt === 'scissor'){
            winnerMessage.textContent = 'CPU wins! Paper < Scissor';
            cpuScoreElement.textContent = ++cpuScore;
        }
    }
    else if(playerOpt === 'rock'){
        if(cpuOpt === 'paper'){
            winnerMessage.textContent = 'CPU wins! Rock < Paper';
            cpuScoreElement.textContent = ++cpuScore;
        }
        else if(cpuOpt === 'rock'){
            winnerMessage.textContent = 'It is a draw!  Rock = Rock';
            drawScoreElement.textContent = ++drawScore;
        }
        else if(cpuOpt === 'scissor'){
            winnerMessage.textContent = 'Player 1 won! Rock > Scissor';
            playerScoreElement.textContent = ++playerScore;
        }
    }
    else if(playerOpt === 'scissor'){
        if(cpuOpt === 'paper'){
            winnerMessage.textContent = 'Player 1 win! Scissor > Paper';
            playerScoreElement.textContent = ++playerScore;
        }
        else if(cpuOpt === 'rock'){
            winnerMessage.textContent = 'CPU wins! Scissor < Rock';
            cpuScoreElement.textContent = ++cpuScore;
        }
        else if(cpuOpt === 'scissor'){
            winnerMessage.textContent = 'It is a draw! Scissor = Scissor';
            drawScoreElement.textContent = ++drawScore;
        }
    }
}