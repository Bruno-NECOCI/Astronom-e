import { ADD_ARTICLE, GET_ARTICLES, GET_ARTICLE_DETAILS, EDIT_ARTICLE, DELETE_ARTICLE } from "../actions/articles.action"

const INITIAL_STATE = {}

export default function articleReducer(state = INITIAL_STATE, action){
    switch (action.type) {
      case GET_ARTICLES:
        return action.payload
      case GET_ARTICLE_DETAILS:
        if(action.payload === undefined){
            return ''
        }else{
            return action.payload
        }
      case ADD_ARTICLE:
        return [... state, action.payload]
      case EDIT_ARTICLE:
        return {
                ...state,
                Titre : action.payload.Titre,
                Contenu: action.payload.Contenu,
                Date: action.payload.Date
               }
      case DELETE_ARTICLE:
        return action.payload
      default: 
        return state
    }
}