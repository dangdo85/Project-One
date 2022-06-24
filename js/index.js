// const player = document.getElementsByClassName('player')

// const computer = document.getElementById('computer')


// const cardOne = document.body.getElementById('playerCard1')
// cardOne.appendChild(shuffledDeck[shuffledDeck.length - 1])
// console.log(cardOne)

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
    // }

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

        // function Board() {
        //     this.positions = Array.from(document.querySelectorAll('board'));
        //     console.log(this.positions)
        // }
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


//make card deck, shuffle, and deal hands
let players = [];
players[0] = {name: 'Player', hand: []};
players[1] = {name: 'Computer', hand: []};

const rows = ['A','B','C','D', 'E', 'F'];
const columns = ['0', '1', '2', '3', '4', '5'];
let deck = [];
for (let i=0;i<rows.length;i++) {
    for (let j=0;j<columns.length;j++) {
        const card = {row: `${rows[j]}`, column: `${columns[i]}`};
        deck.push(card);
    }
}

deck.sort(function() {return 0.5 - Math.random();});

const deal = function() {
    for (i=0;i<4;i++) {
        let theDiv = ('')
        for (j=0;j<players.length;j++) {
            players[j].hand.push(deck[0]);
            deck.splice(0,1); 
    }
}
}
deal();

//display cards in hand
let playerCard1 = document.getElementById('playerCard1');
    playerCard1.textContent = `${players[0].hand[0].row}${players[0].hand[0].column}`;
let playerCard2 = document.getElementById('playerCard2');
    playerCard2.innerText = `${players[0].hand[1].row}${players[0].hand[1].column}`;
let playerCard3 = document.getElementById('playerCard3');
    playerCard3.innerText = `${players[0].hand[2].row}${players[0].hand[2].column}`;
let playerCard4 = document.getElementById('playerCard4')
    playerCard4.innerText = `${players[0].hand[3].row}${players[0].hand[3].column}`;    

//click cards in hand...    
let el1 = document.getElementById('playerCard1');
    el1.onclick = clickHere1; 
function clickHere1() {
    document.getElementById(`${el1}`).innerText = 'X';
    // '<p style="color: orange", "font-size=2rem">X</p>';
}    

let el2 = document.getElementById('playerCard2');
    el2.onclick = clickHere2; 
function clickHere2() {
    console.log('clicked2')
}

let el3 = document.getElementById('playerCard3');
    el3.onclick = clickHere3; 
function clickHere3() {
    console.log('clicked3')
}

let el4 = document.getElementById('playerCard4');
    el4.onclick = clickHere4; 
function clickHere4() {
    console.log('clicked4')
}
// }