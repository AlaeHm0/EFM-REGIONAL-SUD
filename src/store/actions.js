export const add_article = (article) => {
    return {
        type : "ADD_ARTICLE",
        payload : article
    }
}
export const delete_article = (article) => {
    return {
        type : "DELETE_ARTICLE",
        payload : article
    }
}