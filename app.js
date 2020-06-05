const game = () => {
  let playerScore = 0
  let computerScore = 0

  // Memulai permainan
  const startGame = () => {
    const playButton = document.querySelector('.intro button')
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match')

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fadeOut')
      match.classList.add('fadeIn')
    })
  }
  // Function saat match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button')
    const playerElement = document.querySelector('.playerElement')
    const computerElement = document.querySelector('.computerElement')

    // function untuk computer options
    const computerOptions = ['fire', 'water', 'earth']

    options.forEach(options => {
      options.addEventListener('click', function () {

        // Pilihan computer
        const computerNumber = Math.floor(Math.random() * 3)
        // console.log(computerNumber)
        const computerChoice = computerOptions[computerNumber]
        // console.log(computerChoice)

        // Function untuk memanggil animasi
        spinImage()
        // Function untuk memanggil
        setTimeout(() => {
          compareElements(this.textContent, computerChoice)
          // update images
          playerElement.src = `./assets/${this.textContent}.png`
          computerElement.src = `./assets/${computerChoice}.png`
        }, 1000)

      })
    })
  }

  // animasi gerak
  const spinImage = () => {
    const imgComputer = document.querySelector('.computerElement')
    const gambar = ['fire', 'water', 'earth']
    let i = 0

    const startTime = new Date().getTime()
    setInterval(function () {
      if (new Date().getTime() - startTime > 1000) {
        clearInterval
        return
      }
      imgComputer.setAttribute('src', `assets/${gambar[i++]}.png`)
      if (i == gambar.length) i = 0
    }, 100)
  }

  // update score
  const updateScore = () => {
    const changePlayerScore = document.querySelector('.playerScore p')
    const changeComputerScore = document.querySelector('.computerScore p')
    changePlayerScore.textContent = playerScore
    changeComputerScore.textContent = computerScore
  }

  const compareElements = (playerChoice, computerChoice) => {
    // Update text di match
    const winner = document.querySelector('.winner')
    // Apabila hasil nya seri
    if (playerChoice === computerChoice) {
      winner.textContent = 'Draw!'
      return
    }
    // Apabila player memilih fire
    if (playerChoice === 'fire') {
      if (computerChoice === 'earth') {
        winner.textContent = 'Player Wins!'
        playerScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Computer Wins!'
        computerScore++
        updateScore()
        return
      }
    }

    // Apabila player memilih water
    if (playerChoice === 'water') {
      if (computerChoice === 'earth') {
        winner.textContent = 'Computer Wins!'
        computerScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Player Wins!'
        playerScore++
        updateScore()
        return
      }
    }

    // Apabila player memilih earth
    if (playerChoice === 'earth') {
      if (computerChoice === 'fire') {
        winner.textContent = 'Computer Wins!'
        computerScore++
        updateScore()
        return
      } else {
        winner.textContent = 'Player Wins!'
        playerScore++
        updateScore()
        return
      }
    }
  }
  // Function untuk memanggil function di dalam
  startGame()
  playMatch()
}

// Function untuk memulai game
game()