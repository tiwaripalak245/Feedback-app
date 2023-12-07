const FeedbackReducer = (state,action) => {
switch (action.type){
   
    case "DELETE":
    return{
        ...state,
        reviews: state.reviews.filter ((review) => review.id!== action.payload)
    }

    case "SAVE":
    return{
        ...state,
        reviews: [action.payload, ...state.reviews],
    };

    case "EDIT_REVIEW":
    return{
        ...state,
        edit: {review: action.payload, editMode: true},

    }; 

    case "UPDATE":
        return{
            ...state,
          reviews: state.reviews.map((review) => review.id=== action.payload.id ? action.payload : review), 
          edit: {review: {}, editMode: false}
        }
    default:
        return state;
}
}
export default FeedbackReducer;