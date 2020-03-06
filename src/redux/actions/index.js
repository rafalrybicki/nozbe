import { TOGGLE_PRIORITY, TOGGLE_COMPLETION } from './actionTypes'

export const togglePriority = id => ({
  type: TOGGLE_PRIORITY,
  id
})

export const toggleCompletion = id => ({
  type: TOGGLE_COMPLETION,
  id
})

