var Model = {
  grid: [],
  // gen list of values (1,2)
  gridSetup: function(size){
  

     
  },

  generateCards: function(size){
    var valueArray = []

    var values = function(size){
      for(var i = 1; i <= size; i++){
        valueArray.push(i);
        valueArray.push(i); 
      }
    }  
  }

}

var View = {

}

var Controller = {

}

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