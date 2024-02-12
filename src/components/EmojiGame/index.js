// /*
// Quick Tip

// - Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

// const shuffledEmojisList = () => {
//   const {emojisList} = this.props
//   return emojisList.sort(() => Math.random() - 0.5)
// }

// */

// // Write your code here.

// import {Component} from 'react'
// import './index.css'

// import NavBar from '../NavBar'
// import EmojiCard from '../EmojiCard'
// import WinOrLoseCard from '../WinOrLoseCard'

// class EmojiGame extends Component {
//   state = {
//     clickedEmojisList: [],
//     topScore: 0,
//     isGameInProgress: true,
//   }

//   resetTheGame = () => {
//     this.setState({clickedEmojisList: [], isGameInProgress: true})
//   }

//   shuffledEmojisList = () => {
//     const {emojisList} = this.props
//     return emojisList.sort(() => Math.random() - 0.5)
//   }

//   finishTheGame = currentScore => {
//     const {topScore} = this.state
//     let newTopScore
//     if (topScore < currentScore) {
//       newTopScore = currentScore
//     }
//     this.setState({topScore: newTopScore, isGameInProgress: false})
//   }

//   oncClickEmoji = id => {
//     // console.log(id)
//     const {clickedEmojisList} = this.state
//     const {emojisList} = this.props
//     const isEmojiPresent = clickedEmojisList.includes(id)

//     if (isEmojiPresent) {
//       this.finishTheGame(clickedEmojisList.length)
//     } else {
//       if (clickedEmojisList.length - 1 === emojisList.length) {
//         this.finishTheGame(emojisList.length)
//       }
//       this.setState(prevState => ({
//         clickedEmojisList: [...prevState.clickedEmojisList, id],
//       }))
//     }
//     // this.shuffledEmojisList()
//   }

//   render() {
//     const {emojisList} = this.props
//     const {isGameInProgress, clickedEmojisList, topScore} = this.state
//     console.log(clickedEmojisList)
//     const emojisList1 = this.shuffledEmojisList()
//     const renderEmojiCard = (
//       <div className="main-screen-container">
//         <ul className="list-container">
//           {emojisList1.map(each => (
//             <EmojiCard
//               oncClickEmoji={this.oncClickEmoji}
//               key={each.id}
//               eachEmojiObject={each}
//             />
//           ))}
//         </ul>
//       </div>
//     )

//     const renderWinLoseCard = (
//       <div className="win-lose-card">
//         <WinOrLoseCard
//           isWin={clickedEmojisList.length === emojisList.length}
//           score={clickedEmojisList.length}
//           resetTheGame={this.resetTheGame}
//         />
//       </div>
//     )

//     return (
//       <div className="bg-container">
//         <NavBar
//           score={clickedEmojisList.length}
//           topScore={topScore}
//           isGameInProgress={isGameInProgress}
//         />
//         <div className="bottom-container">
//           {isGameInProgress ? renderEmojiCard : renderWinLoseCard}
//         </div>
//       </div>
//     )
//   }
// }

// export default EmojiGame

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  renderScoreCard = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.resetGame}
        score={clickedEmojisList.length}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }

    this.setState({topScore: newTopScore, isGameInProgress: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickedEmojisLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(previousState => ({
        clickedEmojisList: [...previousState.clickedEmojisList, id],
      }))
    }
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props

    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()

    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(emojiObject => (
          <EmojiCard
            key={emojiObject.id}
            emojiDetails={emojiObject}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, isGameInProgress, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar
          currentScore={clickedEmojisList.length}
          isGameInProgress={isGameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {isGameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
