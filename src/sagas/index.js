import { fork } from 'redux-saga/effects'

import LocationSagas from './LocationSagas'

const rootSagas = function * () {
  yield [
    ...LocationSagas,
  ].map((saga) => fork(saga))
}

export default rootSagas