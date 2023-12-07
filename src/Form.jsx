import React, { useContext, useEffect, useState } from 'react'
import FeedbackContext from './context/FeedbackContext';

const Form = () => {

  const{edit, reviews, dispatch} = useContext(FeedbackContext)

  const [rating, setRating] = useState("");
  const[ review, setReview] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();

    if (edit.editMode) {
      dispatch({
        type: "UPDATE",
        payload: {id: edit.review.id, rating: rating, review: review}
      })
    } else {
      dispatch({
        type: "SAVE",
        payload: {id: crypto.randomUUID(),
        rating,
      review}
      })
      setRating("")
      setReview("")
    }
  }

  useEffect(() => {
    setRating(edit.review.rating)
    setReview(edit.review.review)

  },[edit])
  return (
   <form className='form-control rounded-0 bg-warning-subtle'onSubmit={handleSubmit}>
    <select className='form-control' onChange={(e) => setRating(e.target.value)} value={rating}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    <textarea className='form-control rounded-0 my-3' placeholder='Enter your review'
    onChange={(e) => setReview(e.target.value)} value={review}>
       
    </textarea>
    <button className="button btn btn-outline-warning w-100">
Save Review
    </button>
   </form>
   
  )
}

export default Form
