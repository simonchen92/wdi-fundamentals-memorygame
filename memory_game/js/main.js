var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];

var cardsInPlay = [];


// Alert message would pop up to tell us to see if cards match or not

var checkForMatch = function () {
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
};


var flipCard = function () {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src", cards[cardId].cardImage);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

// Once player select 2 cards - see if it match or not

if (cardsInPlay.length === 2){
	checkForMatch();
};
};

console.log(cardsInPlay);


var createBoard = function () {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click", flipCard);
	document.getElementById("game-board").appendChild(cardElement);
}
};

// Below is the Fisher-Yates algorithm for card shuffle

// function shuffle(array) {
//   var m = array.length, t, i;
//
//   // While there remain elements to shuffle…
//   while (m) {
//
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);
//
//     // And swap it with the current element.
//     t = array[m];
//     array[m] = array[i];
//     array[i] = t;
//   }
// 
//   return array;
// }

// Reset Game
var resetGame = function () {
	for (var i = 0; i < cards.length; i++) {
		document.getElementsByTagName("img")[i].setAttribute('src', 'images/back.png');
};
};



createBoard();
document.querySelector("button").addEventListener("click", resetGame);
