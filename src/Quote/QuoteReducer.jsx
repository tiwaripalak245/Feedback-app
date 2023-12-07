const QuoteReducer = (state, action ) => {
    switch(action.type) {
        
        case "FETCH":
        return{
...state,
quoteData: action.payload
        }


        default:
            return state
    }
}

export default QuoteReducer