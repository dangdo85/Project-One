// const player = document.getElementsByClassName('player')

// const computer = document.getElementById('computer')

// const cardOne = document.getElementById('playerCard1')

// const cardTwo = document.getElementById('playerCard2')

// const cardThree = document.getElementById('playerCard3')

// const cardFour = document.getElementById('playerCard4')

// const startReset = document.getElementById('startReset')

// const cardsRemaining = document.getElementById('cardsRemaining')

// const cells = document.getElementById('cell')

// const sequenceGame = new SequenceGame();
// sequenceGame.start();

// function SequenceGame() {
//     const board = new Board();
//     const player = new player(board);
//     const computer = new computer(board);
//     let turn = 0;

//     this.start = function() {
//         const config = { childList: true};
//         const observer = new MutationObserver(() => takeTurn());
//         board.positions.forEach((el) => observer.observe(el, config));
//         takeTurn();
//     }

//     function takeTurn() {
//         if (board.checkForWinner()) {
//             return;
//         }
//         if (turn % 2 === 0) {
//             player.takeTurn();
//             const messages = document.querySelector('h3')
//             messages.textCont = `It's your turn`;
//         } else {
//             computer.takeTurn();
//             const message = document.querySelector('h3')
//             messages.textContent = `It's computer's turn`;
//         }

//         turn++;
//         console.log(turn)
//         if (turn === 37) {
//             const messages = document.querySelector('h3')
//             message.textContent = `It's a draw!!!`; }
//         }

        function Board() {
            this.positions = Array.from(document.querySelectorAll('board'));
            console.log(this.positions)
        }
//             this.checkForWinnner = function() {
//                 let winner = false;
//                 const winningCombinations = [
//                     ['A0', 'A1', 'A2', 'A3'],
//                     ['A1', 'A2', 'A3', 'A4'],
//                     ['A2', 'A3', 'A4', 'A5'],
//                     ['B0', 'B1', 'B2', 'B3'],
//                     ['B1', 'B2', 'B3', 'B4'],
//                     ['B2', 'B3', 'B4', 'B5'],
//                     ['C0', 'C1', 'C2', 'C3'],
//                     ['C1', 'C2', 'C3', 'C4'],
//                     ['C2', 'C3', 'C4', 'C5'],
//                     ['D0', 'D1', 'D2', 'D3'],
//                     ['D1', 'D2', 'D3', 'D4'],
//                     ['D2', 'D3', 'D4', 'D5'],
//                     ['E0', 'E1', 'E2', 'E3'],
//                     ['E1', 'E2', 'E3', 'E4'],
//                     ['E2', 'E3', 'E4', 'E5'],
//                     ['F0', 'F1', 'F2', 'F3'],
//                     ['F1', 'F2', 'F3', 'F4'],
//                     ['F2', 'F3', 'F4', 'F5'],
//                     ['A0', 'B0', 'C0', 'D0'],
//                     ['B0', 'C0', 'D0', 'E0'],
//                     ['C0', 'D0', 'E0', 'F0'],
//                     ['A1', 'B1', 'C1', 'D1'],
//                     ['B1', 'C1', 'D1', 'E1'],
//                     ['C1', 'D1', 'E1', 'F1'],
//                     ['A2', 'B2', 'C2', 'D2'],
//                     ['B2', 'C2', 'D2', 'E2'],
//                     ['C2', 'D2', 'E2', 'F2'],
//                     ['A3', 'B3', 'C3', 'D3'],
//                     ['B3', 'C3', 'D3', 'E3'],
//                     ['C3', 'D3', 'E3', 'F3'],
//                     ['A4', 'B4', 'C4', 'D4'],
//                     ['B4', 'C4', 'D4', 'E4'],
//                     ['C4', 'D4', 'E4', 'F4'],
//                     ['A5', 'B5', 'C5', 'D5'],
//                     ['B5', 'C5', 'D5', 'E5'],
//                     ['C5', 'D5', 'E5', 'F5'],
//                     ['A0', 'B1', 'C2', 'D3'],
//                     ['A1', 'B2', 'C3', 'D4'],
//                     ['A2', 'B3', 'C4', 'D5'],
//                     ['A3', 'B2', 'C1', 'D0'],
//                     ['A4', 'B3', 'C2', 'D1'],
//                     ['A5', 'B4', 'C3', 'D2'],
//                     ['B0', 'C1', 'D2', 'E3'],
//                     ['B1', 'C2', 'D3', 'E4'],
//                     ['B2', 'C3', 'D4', 'E5'],
//                     ['B3', 'C2', 'D1', 'E0'],
//                     ['B4', 'C3', 'D2', 'E1'],
//                     ['B5', 'C4', 'D3', 'E2'],
//                     ['C0', 'D1', 'E2', 'F3'],
//                     ['C1', 'D2', 'E3', 'F4'],
//                     ['C2', 'D3', 'E4', 'F5'],
//                     ['C3', 'D2', 'E1', 'F0'],
//                     ['C4', 'D3', 'E2', 'F1'],
//                     ['C5', 'D4', 'E3', 'F2']
//                 ];
//                 const position = this.positions;

//                 // winningCombinations.forEach((winningCombo) => {
//                 //     const 
//                 // })
//             }
//         }
//     }


//deck of cards
const rows = ['A', 'B', 'C', 'D', 'E', 'F'];

const columns = ['0', '1', '2', '3', '4', '5',];
const deck = [];

for(let rowCounter = 0; rowCounter < 6; rowCounter += 1) {
    for(let columnCounter = 0; columnCounter < 6; columnCounter += 1) {
        deck.push(rows[rowCounter] + columns[columnCounter])
    }
}
// console.log(deck)

//selecting random card
let cardSelect = deck[Math.floor(Math.random()*deck.length)];

//removing selected card from array
let cardIndex = deck.indexOf(cardSelect);

    if (cardIndex > -1) {
    deck.splice(cardIndex, 1);
    console.log(cardSelect);
    console.log(deck);
}




