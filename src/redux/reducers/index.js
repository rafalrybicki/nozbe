import { combineReducers } from 'redux'
import tasks from './tasks'
import taskComments from './taskComments'

export default combineReducers({
  tasks,
  taskComments
})