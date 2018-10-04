

var cardsArray = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8']

// fisher yates shuffle
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
cardsArray = shuffle(cardsArray);
console.log(cardsArray);  

var i = 0;
for(let y = 0; y < 4; y++){
    $('.game').append(`<div class='game-column game-column-${y}'></div>`)
    for(let x = 0; x < 4; x++){
        console.log(`number: ${i} random:${cardsArray[i]}`);
        const gameSquare = $(`<div id='square-${y}-${x}'>${cardsArray[i]}</div>`)
        gameSquare.addClass('square')
        gameSquare.addClass(`square-${y}-${x}`)
        gameSquare.attr('x', x)
        gameSquare.attr('y', y)
        
        $(`.game-column-${y}`).append(gameSquare)
        // console.log(gameSquare.attr('x'));
        // console.log(gameSquare.attr('y'));
        gameSquare.click(function() {
            var ems = $('.selected')
            if (ems.length == 2) {
                return
            }   
            $(`#square-${y}-${x}`).css('background-color', 'black');
            $(`#square-${y}-${x}`).css('color', 'white');
            $(`#square-${y}-${x}`).addClass('selected');
            
            ems = $('.selected')
            console.log(ems)
            if (ems.length == 2) {
                var em1 = $(ems[0])
                var em2 = $(ems[1])
                console.log(em1, em2)
                if (em1.text() != em2.text()) {
                    window.setTimeout(function() {
                        em1.removeClass('selected');
                        em2.removeClass('selected');
                        em1.css('color', 'dodgerblue')
                        em1.css('background-color', 'dodgerblue')
                        em2.css('color', 'dodgerblue')
                        em2.css('background-color', 'dodgerblue')
                    }, 2000)
                } else {
                    em1.removeClass('selected');
                    em2.removeClass('selected');
                    em1.addClass('winner')
                    em2.addClass('winner')
                }
            }
        })
        i++;
    }
    
}

