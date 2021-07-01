const INITIAL_STATE = {
  state: '',
};

export default function firstReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state
  }
}