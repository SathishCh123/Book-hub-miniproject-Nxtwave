import {Link} from 'react-router-dom'

import {BsFillStarFill} from 'react-icons/bs'
import './index.css'

const BooksList = props => {
  const {bookListDetails} = props
  const {coverPic, authorName, title, rating, readStatus, id} = bookListDetails
  return (
    <li className="books-list-item-container">
      <Link to={`/books/${id}`} className="link-item1">
        <img src={coverPic} alt={title} className="cover-image" />
        <div className="text-container-of-list-item">
          <h1 className="book-title margin">{title}</h1>
          <p className="book-author-name margin">{authorName}</p>
          <div className="rating-container margin">
            <p className="rating-status-title">Avg Rating</p>
            <BsFillStarFill className="star" />
            <p className="rating-status-title">{rating}</p>
          </div>
          <div className="read-status-container margin">
            <p className="rating-status-title">Status:</p>
            <p className="read-status">{readStatus}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}
export default BooksList
