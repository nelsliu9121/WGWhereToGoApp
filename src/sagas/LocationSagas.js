import { call, put, fork, takeEvery } from 'redux-saga/effects'
import { getAll, sync, CHILD_ADDED, CHILD_REMOVED } from 'firebase-saga'

import { Types as LocationActionTypes, Creators as LocationActionCreators } from '../actions/LocationActions'

export const fetchLocations = function * () { 
  try { 
    const locations = yield call(getAll, 'Locations')
    yield put(LocationActionCreators.locationsReceived(locations)) 
  } catch (error) { 
    yield put(LocationActionCreators.fetchLocationsFailed(error)) 
  } 
}

export const subscribeLocations = function * () {
  yield fork(sync, 'Locations', {
    [CHILD_ADDED]: LocationActionCreators.subscribeLocationsAdded,
    [CHILD_REMOVED]: LocationActionCreators.subscribeLocationsRemoved,
  })
}

export const watchSubscribeLocations = function * () {
  yield takeEvery(LocationActionTypes.SUBSCRIBE_LOCATIONS, subscribeLocations)
}

export const watchFetchLocations = function * () { 
  yield takeEvery(LocationActionTypes.FETCH_LOCATIONS, fetchLocations)
}

export default [
  watchSubscribeLocations,
  watchFetchLocations,
]