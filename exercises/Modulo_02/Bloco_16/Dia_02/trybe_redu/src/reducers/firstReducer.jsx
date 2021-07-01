const INITIAL_STATE = 0;

export default function firstReducer(state = INITIAL_STATE, action) {
  if (action.type) {
    return state
  }
}