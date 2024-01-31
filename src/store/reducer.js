const initState = {
    articles : [
        { id : 10, designation : 'article1', famille : 'informatique'},
        { id : 11, designation : 'article2', famille : 'bureau'},
    ]
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case "ADD_ARTICLE":
            return {...state, articles : [...state.articles, action.payload]}
        case "DELETE_ARTICLE":
            const newState = state.articles.filter(art => art.id !== action.payload.id)
            return {...state, articles : newState};
        default:
            return state;
    }
}

export default reducer;