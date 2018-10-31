// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

document.getElementById("complement").addEventListener("click", generateRandomText);

function generateRandomText() {
  let complement = [
    "Your smile is contagious.",
    "I bet you make babies smile.",
    "You have the best laugh.",
    "You light up the room.",
    "You have a great sense of humor.",
    "If cartoon bluebirds were real, a couple of 'em would be sitting on your shoulders singing right now.",
    "You're like sunshine on a rainy day.",
    "You bring out the best in other people.",
    "I bet you sweat glitter.",
    "Colors seem brighter when you're around.",
    "You're more fun than a ball pit filled with candy.",
    "Jokes are funnier when you tell them.",
    "You always know how to find that silver lining.",
    "You're a candle in the darkness.",
    "Being around you is like a happy little vacation.",
    "You're more fun than bubble wrap.",
    "You're like a breath of fresh air.",
    "You're someone's reason to smile.",
    "How do you keep being so funny and making everyone laugh?",
    "You have impeccable manners.",
    "I like your style.",
    "You're strong.",
    "Is that your picture next to 'charming' in the dictionary?",
    "Your kindness is a balm to all who encounter it.",
    "You are brave.",
    "Your insides are even more beautiful than your outside.",
    "You have the courage of your convictions.",
    "You're a great listener.",
    "You were cool way before hipsters were cool.",
    "That thing you don't like about yourself is what makes you really interesting.",
    "You're inspiring.",
    "You're so thoughtful.",
    "When you make up your mind, nothing stands in your way.",
    "You seem to really know who you are.",
    "You're a smart cookie.",
    "Your perspective is refreshing.",
    "Your ability to recall random factoids at just the right times is impressive.",
    "When you say, I meant to do that, I totally believe you.",
    "You have the best ideas.",
    "You're always learning new things and trying to better yourself. That's awesome.",
    "If someone based an Internet meme on you, it would have impeccable grammar.",
    "You could survive a zombie apocalypse.",
    "When you make a mistake, you fix it.",
    "You're great at figuring stuff out.",
    "Your creative potential seems limitless.",
    "I bet you do crossword puzzles in ink.",
    "You have a good head on your shoulders.",
    "Everyone gets knocked down sometimes; only people like you get back up again and keep going.",
    "You should be proud of yourself.",
    "You are making a difference.",
    "You deserve a hug right now.",
    "You're a great example to others.",
    "Actions speak louder than words, and yours tell an incredible story.",
    "You're an awesome friend.",
    "You're more helpful than you realize.",
    "Hanging out with you is always fun.",
    "That thing where you know when someone needs something? That's amazing.",
    "Being around you makes everything better.",
    "You should be thanked more often. Thank you.",
    "Our community is better because you're in it.",
    "Someone is getting through something hard right now because you've got their back. Nice work.",
    "You always know just what to say.",
    "The people you love are lucky to have you in their lives.",
    "Any team would be lucky to have you on it.",
    "Defenseless animals are drawn to you.",
    "The way you treasure your loved ones is incredible.",
    "You're a gift to those around you.",
    "Has anyone ever told you that you have great posture?",
    "I appreciate you.",
    "You are the most perfect you there is.",
    "You are enough.",
    "You're all that and a super-size bag of chips.",
    "You've got all the right moves.",
    "Everything would be better if more people were like you.",
    "When you're not afraid to be yourself, that's when you're incredible.",
    "You're wonderful.",
    "You're better than a triple-scoop ice cream cone. With sprinkles.",
    "You're one of a kind.",
    "If you were a box of crayons, you'd be the big industrial name-brand one with a built-in sharpener.",
    "Who raised you? They deserve a medal for a job well done.",
    "Somehow you make time stop and fly all at the same time.",
    "In high school, I bet you were voted most likely to continue being awesome.",
    "There's ordinary, and then there's you.",
    "You're even better than a unicorn because you're real.",
    "You're really something special."
    ]
  let result = Math.floor(Math.random()*complement.length)
  return document.getElementById("result").innerHTML = complement[result]
}

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost:" + PORT);
});
