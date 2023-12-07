import React, { useContext, useEffect } from 'react'
import QuoteContext from './Quote/QuoteContext'

const Quote = () => {

    const {quoteData, dispatch} = useContext(QuoteContext);

    const fetchQuote = async () => {
        const response = await fetch("https://quotable.io/random")
        const data = await response.json();

        dispatch({
            type : "FETCH",
            payload: data,
        });
    }

    useEffect(() => {
        fetchQuote();
    },[])
    
  return (
   <marquee className="my-5 fs-1 text fw-bold text-warning-emphasis">
{quoteData.content} - {quoteData.author} </marquee>
  )
}

export default Quote
