var Model = {
  grid: [],
  cardsArray: [],
  // score

  gridSetup: function(size){
    this.grid = [];
    this.generateCards(size);

    for(var col = 1; col <= size; col++){
      var column = [];
      this.grid.push(column);

      for(var cell = 1; cell <= size; cell++){
        var index = Math.floor(Math.random() * this.cardsArray.length);
        var element = this.cardsArray.splice(index, 1)[0];
        column.push(element);
      }
    }
  },

  generateCards: function(size){
    for(var i = 1; i <= (size*size / 2); i++){
      this.cardsArray.push(i);
      this.cardsArray.push(i);
    }
  },

  getCardValue: function(cell,col) {
    return this.grid[col][cell];
  },

  // getGridSize: function() {
  //   return this.grid.length;
  // },
};

var View = {
  $container: $('.container'),

  renderGrid: function(size) {
    for(var col = 0; col < size; col++){
      for (var cell = 0; cell < size; cell++) {
        var $card = $('<span class="card">');
        this.$container.append($card);
        $card.attr({'data-x': col, 'data-y': cell});
      }
      this.$container.append('<br>');
    }
  },
};

var Controller = {
  init: function(size) {
    Model.gridSetup(size);
    View.renderGrid(size);
  },
};

$(document).ready(function() {
  Controller.init(4);
});

/*
  2x2 grid (eventually a bigger even numbered grid)
    this will be represented by an array of arrays?
    [[1,2],[2,1]]
  ON click get index number (via div?)
  Reveal picture/number at index
  When they click on another div
  (we'll distinguish by setting a class "flipped" on click, and content will be revealed)
  Reveal that card
  check to see if cards are a match (via values stored in Model array)
  if yes they remain flipped and we add some points to their score
  if not they flip back to hidden (after a delay)
  then we subrtract from score

*/
