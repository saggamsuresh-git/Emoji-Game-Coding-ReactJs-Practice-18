// // Write your code here.
// import './index.css'

// const WinOrLoseCard = props => {
//   const {isWon, score, resetTheGame} = props
//   console.log(isWon)
//   const winLogo = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
//   const loseLogo = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
//   const imgLogo = isWon ? winLogo : loseLogo
//   const textElement = isWon ? 'Best Score ' : 'Score'
//   const mainHeading = isWon ? 'You Won' : 'You Lose'

//   const resetGame = () => {
//     resetTheGame()
//   }

//   return (
//     <div className="win-lose-card-container">
//       <div className="win-lose-card-text-container">
//         <h1>{mainHeading}</h1>
//         <p className="score-text">{textElement}</p>
//         <p className="score-win-lose-card">{score}/12</p>
//         <button onClick={resetGame} type="button" className="play-again-btn">
//           Play Again
//         </button>
//       </div>
//       <div>
//         <img className="win-lose-img" src={imgLogo} alt="win or lose" />
//       </div>
//     </div>
//   )
// }

// export default WinOrLoseCard

import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, onClickPlayAgain, score} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-or-lose-card">
      <div className="details-section">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="current-score-label">{scoreLabel}</p>
        <p className="current-score-value">{score}/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
