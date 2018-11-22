import { TEST_DISPATCH } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_DISPATCH:
      return {
        ...state, //spread operator to copy the initialState
        user: action.payload
      }
    default:
      return state;
  }
}