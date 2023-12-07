import React, { useContext } from 'react'
import ListItem from './ListItem'
import FeedbackContext from './context/FeedbackContext'

const ListGroup = () => {

    const {reviews} =useContext(FeedbackContext)


  return (
  <ul className="list-group my-3">
{
    reviews.map(review => <ListItem key={review.id} review={review}/>)
}
  </ul>
  )
}

export default ListGroup
