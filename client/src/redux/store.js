import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './reducers/taskReducer';
import taskSaga from './saga/taskSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    task: taskReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(taskSaga);
