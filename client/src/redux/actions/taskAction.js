import {
  SET_TASK, FETCH_TASK, ADD_TASK, FETCH_ADD_TASK,
} from '../type';

export const setTusk = (payload) => ({ type: SET_TASK, payload });
export const fetchTusk = () => ({ type: FETCH_TASK });

export const addTusk = (payload) => ({ type: ADD_TASK, payload });
export const fetchAddTusk = () => ({ type: FETCH_ADD_TASK });
