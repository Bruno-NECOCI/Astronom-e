import {combineReducers} from 'redux'
import pickerReducer from './picker.reducer'
import articleReducer from './articles.reducer'

const rootReducer = combineReducers({
    pickerReducer,
    articleReducer
})

export default rootReducer