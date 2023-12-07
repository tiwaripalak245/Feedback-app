import React, { useContext, useEffect } from 'react'
import FeedbackContext from './context/FeedbackContext'

const ListItem = ({review}) => {

    const {edit, dispatch} = useContext(FeedbackContext)

    const handleDelete = (id) => {
        

        dispatch({
            type: "DELETE",
            payload : id,
        })
    }

    const editItem = (review) => {
      dispatch({
type: "EDIT_REVIEW",
payload: review
      })

    
    }


  return (
    <li className="list-group-item shadow-lg mb-2 bg-warning-subtle">
    <h1 className="display-5 text-secondary">Rating:{review.rating}</h1>
    <h3 className="display-6 ">Review :{review.review}</h3>
    <button className="btn btn-warning float-end mx-2" onClick={() => editItem(review)}>
      Edit
    </button>
    <button className="btn btn-danger float-end" onClick={() => handleDelete(review.id)}>
        Delete
    </button>

</li>
  )
}

export default ListItem
