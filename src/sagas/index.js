import { fork } from 'redux-saga/effects'

import LocationSagas from './LocationSagas'
import CourseSagas from './CourseSagas'

const rootSagas = function * () {
  yield [
    ...LocationSagas,
    ...CourseSagas,
  ].map((saga) => fork(saga))
}

export default rootSagas
