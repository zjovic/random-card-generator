const $card = document.querySelector('.card');
const $symbolTop = document.createElement('div');
const $symbolBottom = document.createElement('div');
const $number = document.createElement('div');
const $shuffle = document.querySelector('.shuffle');
const $widthInput = document.querySelector('#width');
const $heightInput = document.querySelector('#height');
const spade = `&#9824;`;
const club = `&#9827;`;
const heart = `&#9829`;
const diamonds = `&#9830;`;
const symbols = [spade, club, heart, diamonds];

window.addEventListener('load', () => {
    generateCard();
});

$shuffle.addEventListener('click', () => {
    generateCard();
});

$widthInput.addEventListener('input', (e) => {
    $card.style.minWidth = `${e.target.value}vw`;
});

$heightInput.addEventListener('input', (e) => {
    $card.style.minHeight = `${e.target.value}vh`;
});

function randomSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
};

function randomNumber() {
    let number = Math.floor(Math.random() * 13);
    
    if (number === 10) {
        return `J`;
    } else if (number === 11) {
        return `Q`;
    } else if (number === 12) {
        return `K`;
    }

    return number;
};

function generateCardTemplate() {
    let number = randomNumber();
    let symbol = randomSymbol();

    $number.innerText = number;
    $symbolTop.innerHTML = symbol; 
    $symbolBottom.innerHTML = symbol; 

    $card.appendChild($symbolTop);
    $card.appendChild($number);
    $card.appendChild($symbolBottom);

    $symbolTop.classList.add('symbol');
    $symbolBottom.classList.add('symbol');
    $number.classList.add('number');

    if (symbol === heart || symbol === diamonds) {
        $symbolTop.classList.add('red');
        $symbolBottom.classList.add('red');
    }
}

function generateCard() {
    generateCardTemplate();
}