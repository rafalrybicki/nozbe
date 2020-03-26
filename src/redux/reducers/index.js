import { combineReducers } from 'redux'
import tasks from './tasks'
import comments from './comments'

export default combineReducers({
  tasks,
  comments
})