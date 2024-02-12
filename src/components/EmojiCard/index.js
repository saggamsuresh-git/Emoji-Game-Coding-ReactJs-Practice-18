// Write your code here.
// import './index.css'

// const EmojiCard = props => {
//   const {eachEmojiObject, oncClickEmoji} = props
//   const {id, emojiUrl, emojiName} = eachEmojiObject
//   const onTapEmoji = () => {
//     oncClickEmoji(id)
//   }

//   return (
//     <li className="emoji-container">
//       <button onClick={onTapEmoji} className="emoji-btn" type="button">
//         <img className="emoji-image" src={emojiUrl} alt={emojiName} />
//       </button>
//     </li>
//   )
// }

// export default EmojiCard

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-btn" onClick={onClickEmojiCard}>
        <img className="emoji-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
