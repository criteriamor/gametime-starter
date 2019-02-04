const domUpdates = {
 
  removeStartPage() {
    $('.hidden').removeClass('hidden');
    $('.start-page').remove()
  },

  displayPlayers(p1, p2, p3) {
      $('#player-names-0').text(p1.name);
      $('#player-names-1').text(p2.name);
      $('#player-names-2').text(p3.name);
  },

  displayCategory(roundPuzzle) {
    $('.category-window').text(roundPuzzle.category)
  },

  showHiddenPuzzle() {
    //we're gonna grab the puzzle.correct_answer
  },

  populateRoundPuzzle(roundPuzzle) {
    // console.log(lettersArray);
    // if roundPuzzle.number_of_words === 1
    let letters = roundPuzzle.correct_answer.toUpperCase().split('')

    letters.forEach((letter, i) => {
      $(`#box-${i + 13}`).text(letter)
    })
  },

  displayLetters(consonants, vowels) {
    // $('#consonants-bank').text(consonants);
    consonants.forEach((cons,i) => {
      $(`#c${i}`).text(cons)
      // console.log(cons)
    })

    vowels.forEach((vowel,i) => {
      $(`#v${i}`).text(vowel)
      // console.log(vowel)
    })
  },

  displayTurnValue(value) {
    // let turnValue = wheel.turnValue
    $('#spin-value').text(`You've landed on: ${value}!`)
  },

  updateRoundScore(value, num) {
    $(`#player-${num}-round-score`).text(value)
  } 


}

export default domUpdates;