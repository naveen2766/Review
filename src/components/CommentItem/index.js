// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {
    commentDetails,
    onClickLikeButton,
    onClickDeleteButton,
    initialContainerBackgroundClassNames,
  } = props
  const {id, name, comment, isLiked} = commentDetails
  console.log(isLiked)
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const color = isLiked ? 'blue-color' : ''
  const backColor =
    initialContainerBackgroundClassNames[
      Math.floor(Math.random() * initialContainerBackgroundClassNames.length)
    ]
  const date = formatDistanceToNow(new Date())
  const clickedLike = () => {
    onClickLikeButton(id)
  }
  const onClickingDelete = () => {
    onClickDeleteButton(id)
  }

  return (
    <>
      <li className="list-item-container">
        <div className={`name-first-letter ${backColor}`}>
          {name[0].toUpperCase()}
        </div>
        <div className="description-container">
          <div className="name-date">
            <h3>{name}</h3>
            <p className="date">{date}</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
        <div className="icon-container">
          <div className="like-container">
            <img src={imageUrl} alt="like" className="like" />
            <button
              type="button"
              className={`like-button ${color}`}
              onClick={clickedLike}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            className="like-button"
            onClick={onClickingDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </li>
      <hr />
    </>
  )
}

export default CommentItem
