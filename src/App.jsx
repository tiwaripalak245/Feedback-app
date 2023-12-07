import React from 'react'
import Navbar from './Navbar'
import Form from './Form'
import ListGroup from './ListGroup'
import Quote from './Quote'
import { FeedbackProvider } from './context/FeedbackContext'
import { QuoteProvider } from './Quote/QuoteContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Navbar/>
      <QuoteProvider>
      <Quote/>
      </QuoteProvider>
      <div className="container p-2">
      <Form/>
      <ListGroup/>
      </div>
    </FeedbackProvider>
  )
}

export default App
