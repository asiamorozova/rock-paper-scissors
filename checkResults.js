

// crate a function with two parameters player and computer
export default function checkResults(computer, player) {

    if (computer === player) return 'draw';
    if (computer === 'scissors' && player === 'rock') return 'win';
    else if (computer === 'paper' && player === 'scissors') return 'win';
    else if (computer === 'rock' && player === 'paper') return 'win';
    else return 'lose';
}
