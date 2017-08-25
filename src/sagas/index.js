import { fork } from 'redux-saga/effects'

import * as LocationSagas from './LocationSagas'

const rootSagas = function * () {
  yield * [
    ...LocationSagas,
  ].map((saga) => fork(saga))
}

export default rootSagas