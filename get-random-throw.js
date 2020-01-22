
export default function getRandomThrow() {

    const randomNumber = Math.floor(Math.random() * 3);


    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'scissors';
    } else {
        return 'paper';
    }
}
