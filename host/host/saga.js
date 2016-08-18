import { put, take, call, select, fork } from 'redux-saga/effects'

import { fetchContents, changePage } from './actions'

function* changePageSaga() {
  while (true) {
    const { payload } = yield take(`${changePage}`)
    console.log("sent")
    yield call(sendData, 'change page', payload)
  }
}

function* fetchContentsSaga() {
  while (true) {
    yield take(`${fetchContents}`)
    console.log("sent")
    yield call(sendData, 'fetch contents')
  }
}

function* saga() {
  yield fork(changePageSaga)
  yield fork(fetchContentsSaga)
}

export default saga
