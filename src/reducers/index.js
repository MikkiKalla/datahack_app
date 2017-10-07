import { combineReducers } from 'redux'
import navigation from './navigation'
import verses from './verses'
const rootReducer = combineReducers({
  navigation,
  verses
})

export default rootReducer