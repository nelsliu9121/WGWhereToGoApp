import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { getAll } from 'firebase-saga'

import { Types as LocationActionTypes, Creators as LocationActionCreators } from '../actions/LocationActions'

export const fetchLocations = function * () {
  try {
    const locations = yield call(getAll, 'Locations')
    yield put(LocationActionCreators.locationsReceived(locations))
  } catch (error) {
    yield put(LocationActionCreators.fetchLocationsFailed(error))
  }
}

export const watchFetchLocations = function * () {
  yield * takeEvery(LocationActionTypes.FETCH_LOCATIONS, fetchLocations)
}