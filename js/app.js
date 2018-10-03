
class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 75;
    };
}

var gameGrid = [];

//create game board
for(let y = 1; y < 11; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 10; x > 0; x--){
        const gameSquare = $('<div/>')
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y}-${x}`)
        $(`.game-column-${y}`).append(gameSquare)
        gameSquare.push
    }
}
console.log(gameSquare);


