import { createContext, useReducer } from "react";
import FeedbackReducer from "./FeedbackReducer";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
const initialstate = {
    reviews : [],
    edit: {review: {}, editMode: false},
}

const [state, dispatch] = useReducer(FeedbackReducer, initialstate)

    return (
        <FeedbackContext.Provider value={{...state, dispatch}}>
            {children}
        </FeedbackContext.Provider>
    )
    
}

export default FeedbackContext;