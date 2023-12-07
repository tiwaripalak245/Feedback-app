import { createContext, useReducer } from "react";
import Quotereducer from "./QuoteReducer";
import QuoteReducer from "./QuoteReducer";

const QuoteContext = createContext()

export const QuoteProvider = ({children}) => {

    const initialstate = {
        quoteData : {
            content: "famous quotes here",
            author: "~unknown"
        }
    }

    const[state, dispatch] = useReducer(QuoteReducer, initialstate)
return (
    <QuoteContext.Provider value={{...state, dispatch}}>
        {children}
    </QuoteContext.Provider>
)
}

export default QuoteContext;