const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
    let thankCards = []
    for (let i = 0; i < names.length; i++) {
        thankCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankCards
}