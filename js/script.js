function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
function hiddenElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz/';
    const alphabetArray = alphabetString.split('');
    const randomAlphabetIndex = Math.round(Math.random() * 26);
    return alphabetArray[randomAlphabetIndex];
}

function addBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

const audio = new Audio();
// -----------------------------------------------------------------------------

let isGamePlay = false;

function play() {
    hiddenElementById('home');
    showElementById('play-ground');
    continueGame()
    isGamePlay = true
}

function continueGame() {
    const latter = getRandomAlphabet()
    const currentLatter = document.getElementById('current-alphabet');
    currentLatter.innerText = latter.toUpperCase();
    addBackgroundColorById(latter);
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function handleKeyboardButtonPress(event) {
    if (isGamePlay === false) {
        return
    }
    const pressLatter = event.key;

    const currentLatter = document.getElementById('current-alphabet').innerText.toLowerCase();

    const score = document.getElementById('points');

    let points = parseInt(score.innerText);

    const life = document.getElementById('life');

    let lifeLeft = parseInt(life.innerText);

    if (pressLatter == currentLatter) {
        removeBackgroundColorById(currentLatter);
        points++;
        score.innerText = points;
        audio.src = "../sounds/tada-fanfare-a-6313.mp3";
        audio.play();
        continueGame();
    }
    else {
        if (lifeLeft <= 1) {
            hiddenElementById('play-ground');
            showElementById('score')
            yourScore(points);
            isGamePlay = false;
        }
        lifeLeft--;
        const lifeLeftPercent = (lifeLeft / 4) * 100;
        const artBoard = document.getElementById('artboard');
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${lifeLeftPercent}%,red)`
        life.innerText = lifeLeft;
        audio.src = "../sounds/wrong-answer.mp3";
        audio.play();

    }
}

function yourScore(points) {
    const getScore = document.getElementById('yourScore');
    getScore.innerText = points;
    document.getElementById('playAgain').addEventListener('click', function () {

        const currentLatter = document.getElementById('current-alphabet').innerText.toLowerCase();
        removeBackgroundColorById(currentLatter);

        play();
        hiddenElementById('score');
        document.getElementById('points').innerText = 0;
        document.getElementById('life').innerText = 3;
        const artBoard = document.getElementById('artboard');
        artBoard.style.background = 'linear-gradient(#FFFFFFB3 100%,red)'
    })
}
