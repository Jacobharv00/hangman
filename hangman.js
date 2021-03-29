const Hangman = function (word, guesses, guessedLetters) {
    this.word = word.toLowerCase().split('')
    this.guesses = guesses
    this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

const game1 = new Hangman('taco', 3)
console.log(game1.getPuzzle())

const game2 = new Hangman('burrito', 4)
console.log(game2.getPuzzle())

