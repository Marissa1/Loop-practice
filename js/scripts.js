var ranks = ["ace of ", "2 of ", "3 of ", "4 of ", "5 of ", "6 of ", "7 of ", "8 of ", "9 of ", "10 of ", "jack of ", "queen of ", "king of "]
var suits = ["Hearts", "Spades", "Clubs", "Diamonds"]
console.log(ranks);



for (var i=0; i < ranks.length; i +=1) {
    for (var j=0; j < suits.length; j +=1) {
        console.log(ranks[i] + suits[j]);
    };
};



/*
var cards = ranks.forEach(function(card){
  alert (ranks + suits);
});
$(document).ready(function() {
});
/*
$(document).ready(function() {
  $("button").click(function() {
    var buttonclicked = $(this).attr('id');
    var display = function() {
      return ranks.forEach(function(cards) {
        cards + buttonclicked;
    })};
    display();
    alert(display());
    event.preventDefault();
    });
  });
*/
