var Model = {
  grid: [],
  cardsArray: [],
  flipped: 0,
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

  getCardValue: function(x, y) {
    return this.grid[x][y];
  },

  // getGridSize: function() {
  //   return this.grid.length;
  // },

  cardStates: function(){
    if(this.flipped === 1 ){
      return true
    }else if(this.flipped === 2){
      this.flipped = 0
      return false
    }
  }
};

var View = {
  $container: $('.container'),
  
  init: function(size){
    this.renderGrid(size)
    this.$container.on("click", ".card", Controller.cardClicked)
  },

  renderGrid: function(size) {
    for(var col = 0; col < size; col++){
      for (var cell = 0; cell < size; cell++) {
        var $card = $('<div class="card">');
        this.$container.append($card);
        // TODO remove the text!
        $card.attr({'data-x': col, 'data-y': cell});
      }
      this.$container.append('<br>');
    }
  },

  cardClicked: function(event) {
    var x = $(event.target).data("x")
    var y = $(event.target).data("y")
    View.flipCard(x, y)
  },

  flipCard: function(x,y) {
    var $card = $('.card').filter("[data-x='" + x +"']").filter("[data-y='" + y +"']");
    var value = Controller.getCardValue(x, y)
    $card.addClass("flipped")
    $card.append(value)
   
    
  },

  revertState: function(){
    setTimeout(this.unflipCard, 3000);
  },

  unflipCard: function(){
    var $flipped = $(".flipped")
    $flipped.removeClass("flipped").text("");
  }


};

var Controller = {
  init: function(size) {
    Model.gridSetup(size);
    View.init(size);
  },

  getCardValue: function(x,y){
    return Model.getCardValue(x, y);
  },

  cardClicked: function(e){
    Model.flipped++
    if(Model.cardStates()){
      View.cardClicked(e)
      // this runs when we have one card, it flips it
    }else if(Model.cardStates() === false){
      // this is run with two+ cards
      View.cardClicked(e)
      View.revertState()
      
    }

  }
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
