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
// -----------------------------------------------------------------------------


function play() {
    hiddenElementById('home');
    showElementById('play-ground');
    continueGame()
}

function continueGame() {
    const latter = getRandomAlphabet()
    const currentLatter = document.getElementById('current-alphabet');
    currentLatter.innerText = latter.toUpperCase();
    addBackgroundColorById(latter);
}

document.addEventListener('keyup', handleKeyboardButtonPress)

function handleKeyboardButtonPress(event) {
    
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
        continueGame();
    else {
        if (lifeLeft <= 1) {
            hiddenElementById('play-ground');
            showElementById('score')
            yourScore(points);
        }
        lifeLeft--;
        life.innerText = lifeLeft;

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
    })
}