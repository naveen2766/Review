import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    count: 0,
  }

  onChangeNameInput = event => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    console.log(event.target.value)
    this.setState({comment: event.target.value})
  }

  onAddComment = () => {
    // preventDefault()
    const {name, comment} = this.state
    console.log(name, comment)
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  onClickLikeButton = async id => {
    await this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id)
          return {...eachComment, isLiked: !eachComment.isLiked}
        return eachComment
      }),
    }))
  }

  onClickDeleteButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentsList, comment, count, name} = this.state

    return (
      <div className="container">
        <div className="upper-section">
          <form className="form-container">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <input
              type="text"
              className="name-input"
              placeholder="Your Name"
              onChange={this.onChangeNameInput}
              value={name}
            />
            <textarea
              type="text"
              placeholder="Your Comment"
              className="comment-textarea"
              onChange={this.onChangeComment}
              value={comment}
            />
            <button
              type="button"
              className="add-comment-button"
              onClick={this.onAddComment}
            >
              Add Comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comments-image"
            />
          </div>
        </div>
        <hr />
        <div className="comments-container">
          <div className="comment-heading-box">
            <div className="noOf-comments">{count}</div>
            <p className="comment-para">Comments</p>
          </div>
          <ul className="comments-list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                onClickLikeButton={this.onClickLikeButton}
                onClickDeleteButton={this.onClickDeleteButton}
                initialContainerBackgroundClassNames={
                  initialContainerBackgroundClassNames
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
