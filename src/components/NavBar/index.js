// // Write your code here.
// import './index.css'

// const NavBar = props => {
//   const {score, topScore, isGameInProgress} = props
//   const classes = isGameInProgress
//     ? 'navbar-container'
//     : 'navbar-without-scorecard'

//   const logoAndScoreCard = (
//     <>
//       <div className="logo-container">
//         <img
//           className="emoji-logo"
//           src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
//           alt="emoji logo"
//         />
//         <h1>Emoji Game</h1>
//       </div>
//       <div className="score-card-container">
//         <p className="score">Score: {score}</p>
//         <p className="topScore">Top Score: {topScore}</p>
//       </div>
//     </>
//   )

//   const scoreCard = (
//     <>
//       <div className="logo-container1">
//         <img
//           className="emoji-logo"
//           src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
//           alt="emoji logo"
//         />
//         <h1>Emoji Game</h1>
//       </div>
//     </>
//   )
//   console.log(classes)
//   return (
//     <nav className={classes}>
//       {isGameInProgress ? logoAndScoreCard : scoreCard}
//     </nav>
//   )
// }

// export default NavBar

import './index.css'

const NavBar = props => {
  const {currentScore, isGameInProgress, topScore} = props

  return (
    <nav className="nav-bar-container">
      <div className="title-with-score-container">
        <div className="logo-and-title-container">
          <img
            className="emoji-logo"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
