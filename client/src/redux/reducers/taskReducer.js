/* eslint-disable default-param-last */
import { SET_TASK, ADD_TASK } from '../type';

export default function taskReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TASK: return payload;
    case ADD_TASK: return [...state, payload];
    default: return state;
  }
}
