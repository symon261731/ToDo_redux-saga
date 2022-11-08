/* eslint-disable no-console */
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_TASK, FETCH_ADD_TASK } from '../type';
import { setTusk, addTusk } from '../actions/taskAction';

const host = process.env.REACT_APP_HOST;

const axiosForSetTusk = () => axios.get(`${host}/task/getAllTask`);

function* taskSagaWorker() {
  try {
    const res = yield call(axiosForSetTusk);
    yield put(setTusk(res.data));
  } catch (e) {
    yield console.log(e);
  }
}

const axiosForAddTusk = (info) => axios.post(`${host}/task/addTusk`, { info });

function* taskAddSagaWorker(action) {
  try {
    const res = yield call(axiosForAddTusk, action.payload);
    yield put(addTusk(res.data));
  } catch (e) {
    yield console.log(e);
  }
}

// в Функцию watcher помещаем все worker

function* tuskSagaWatcher() {
  yield takeEvery(FETCH_TASK, taskSagaWorker);
  yield takeEvery(FETCH_ADD_TASK, taskAddSagaWorker);
}

export default tuskSagaWatcher;
