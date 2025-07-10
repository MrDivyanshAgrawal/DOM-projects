let randomNumber=parseInt(Math.random()*100+1);
const submit=document.getElementById("subt");
const userInput=document.getElementById("guessField");
const guessSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const startOver=document.querySelector(".resultParas");

const p=document.createElement("p");

let prevGuess=[]
let numGuess=1
let playGame=true

if(playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    });
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert("Please enter a valid number between 1 and 100.");
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess)
            displayMessage(`Game Over! Random number was ${randomNumber}.`);
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guess it right`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`Your guess is too low!`)
    }else{
        displayMessage(`Your guess is too high!`)
    }
}

function displayGuess(guess){
    userInput.value=''
    guessSlot.innerHTML+=`${guess}, `
    numGuess++
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','');
    const button=document.createElement("button");
    button.setAttribute('id','newGameButton');
    button.textContent='Start New Game';
    button.classList.add('restart-button');
    p.innerHTML='';
    p.appendChild(button);
    startOver.appendChild(p);
    playGame=false;
    newGame();
}

function newGame(){
    const newGameButton=document.getElementById("newGame")
    newGameButton.addEventListener("click",function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[]
        numGuess=1
        guessSlot.innerHTML=''
        remaining.innerHTML=`${11-numGuess}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p)
        playGame=true
    })
}

