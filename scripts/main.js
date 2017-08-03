/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {
  let cardValues = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  let total = 0;
  let singleCardValue = 0;
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A") {
      total += 11;
    } else if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
      total += 10;
    } else {
      total += cardValues.indexOf(hand[i]);
    }
  }
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] === "A" && total > 21)
      total -= 10;
  }
  // console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/