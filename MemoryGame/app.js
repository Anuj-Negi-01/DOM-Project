const images = [
    {
        name : 'dog',
        img: '🐶'
    },
    {
        name : 'cat',
        img: '🐱'
    },
    {
        name : 'mouse',
        img: '🐭'
    },
    {
        name : 'hamster',
        img: '🐹'
    },
    {
        name: 'bunny',
        img: '🐰'
    },
    {
        name: 'fox',
        img: '🦊'
    },
    {
        name: 'bear',
        img: '🐻'
    },
    {
        name: 'panda',
        img: '🐼'
    }
]

let card = [...images, ...images]
let movesCounter = 0;
let matchedPair = 0;
let minutes = 0;
let seconds = 0;
let flippedCards = []
const gameContainer = document.querySelector('#gameContainer')
const moves = document.querySelector('#moves')
const timeDisplay = document.getElementById('time')

function displayCards() {
    gameContainer.innerHTML = ''
    shuffleCards()
    card.forEach((cardDetails) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.dataset.name = cardDetails.name
        card.innerHTML = `
            <div class="card-front">?</div>
            <div class="card-back">${cardDetails.img}</div>
        `;

        card.addEventListener('click', () => {
            flipCard(card)
        })

        gameContainer.appendChild(card)
    })
    movesCounter = 0;
    matchedPair = 0;
    minutes = 0;
    seconds = 0;
    flippedCards = []
    updateMoves()
    updateTimer()
}

function flipCard(card){
    if(card.classList.contains('flipped') || flippedCards.length >= 2) return
    flippedCards.push(card)
    card.classList.add('flipped')
    if(flippedCards.length == 2){
        movesCounter++;
        updateMoves()
        checkMatch()
    }
}

function updateMoves(){
    moves.textContent = `Moves: ${movesCounter}`
}

function checkMatch(){
    const [ card1, card2 ] = flippedCards
    if(card1.dataset.name === card2.dataset.name){
        matchedPair++
        flippedCards = []
        
        if(matchedPair == images.length){
            winCelebration()
        }
    }
    else {
        setTimeout(() => {
            card1.classList.remove('flipped')
            card2.classList.remove('flipped')
            flippedCards = []
        }, 1000)
    }
}


function shuffleCards() {
    for (let i = card.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [card[i], card[j]] = [card[j], card[i]]
    }
}

function winCelebration() {
    const score = calculateScore()
    setTimeout(() => {
        alert(`Congratulations! 🎉\nYou won in ${movesCounter} moves and in ${minutes ? `${minutes}m : ${seconds}s `: `${seconds}s`} time and your score is ${score}`)
    }, 1000)
}

function updateTimer() {
    seconds++;
    if(seconds == 60 ){
        minutes++;
        seconds = 0
    }
    timeDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function restartGame(){
    displayCards()
}

function calculateScore() {
    const baseScore = 1000;
    const movesPenalty = movesCounter * 10;
    return Math.max(0, baseScore - movesPenalty);
}
 

const timmer = setInterval(updateTimer, 1000)

displayCards()