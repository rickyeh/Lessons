// http://hangman.coursera.org

// Start the game of hangman with coursera server
//     POST request, with a JSON object containing single property, "email"
// Coursera will return a game state JSON object.
// To Guess a letter, you will POST to /hangman/game/<key>
//     Accepts a JSON object with object {'guess': 'a'}
var request = require('request');
var prompt = require('prompt');

var server = 'http://hangman.coursera.org/hangman/game';
var initObj = {
    'email': 'rickbyeh@gmail.com'
};

var responseBody = {};

// Initial POST request to start a new game.
request({
    url: server,
    json: true,
    body: initObj,
}, function(err, res, body) {
    console.log(body);
    responseBody = body;

    promptForGuess();
});

// Prompts the user for a letter to guess
function promptForGuess() {
    prompt.start();

    prompt.get(['guess'], function(err, result) {
        guessLetter(result.guess);
    });
}

// Guesses a letter by sending post.
// If game not over, will call promptForGuess() again.
function guessLetter(letter) {
    request({
        url: server + '/' + responseBody.game_key,
        json: true,
        body: {'guess': letter},
    }, function(err, res, body) {
        console.log(body);

        if (body.state === 'alive') {
            promptForGuess();
        } else if (body.state === 'won') {
            console.log('Congratulations, you won!');
        } else {
            console.log('Game over. Better luck next time.');
        }
    });
}
