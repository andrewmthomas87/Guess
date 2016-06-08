function random(low, high) {
	return Math.floor(Math.random() * (high - low + 1)) + low
}

var guess = document.getElementById('guess')
var message = document.getElementById('message')
var guessesLeft = document.getElementById('guessesLeft')
var again = document.getElementById('again')

var numberGuessesLeft = 6
var randomNumber = random(1, 100)
var hasWon = false

function checkNumber() {
	if (numberGuessesLeft > 0 && hasWon == false) {
		numberGuessesLeft = numberGuessesLeft - 1
		guessesLeft.textContent = numberGuessesLeft

		var userGuess = parseInt(guess.value)
		var isNumber = userGuess == randomNumber
		var greaterNumber = userGuess > randomNumber
		var lessNumber = userGuess < randomNumber

		if (isNumber) {
			hasWon = true
			message.textContent = 'You got it! Did you have fun? The correct answer is NO.'
			again.removeAttribute('disabled')
		}
		if (greaterNumber) {
			message.textContent = 'Guess is high'
		}
		if (lessNumber) {
			message.textContent = 'Guess is low'
		}

		if (numberGuessesLeft == 0 && hasWon == false) {
			message.textContent = 'You lose. Don\'t try again.'
			again.removeAttribute('disabled')
		}
	}
}

function playAgain() {
	location.reload()
}
