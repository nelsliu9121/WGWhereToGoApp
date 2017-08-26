import { takeEvery } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'
import { sync, CHILD_ADDED, CHILD_REMOVED } from 'firebase-saga'

import { Types as LocationActionTypes, Creators as LocationActionCreators } from '../actions/LocationActions'

export const subscribeLocations = function * () {
  yield fork(sync, 'Locations', {
    [CHILD_ADDED]: LocationActionCreators.subscribeLocationsAdded,
    [CHILD_REMOVED]: LocationActionCreators.subscribeLocationsRemoved,
  })
}

export const watchSubscribeLocations = function * () {
  yield * takeEvery(LocationActionTypes.FETCH_LOCATIONS, subscribeLocations)
}