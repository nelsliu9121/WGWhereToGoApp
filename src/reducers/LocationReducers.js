import { createReducer } from 'reduxsauce'

import { Types as TYPES } from '../actions/LocationActions'

export const locationsDefaultState = {
  locations: [],
}

export const starLocation = (state = locationsDefaultState, action) => {
  const { locations } = state
  const _id = locations.findIndex((d) => d.id === action.id)
  locations[_id].starred = true
  return {
    ...state,
    locations,
  }
}

export const unstarLocation = (state = locationsDefaultState, action) => {
  const { locations } = state
  const _id = locations.findIndex((d) => d.id === action.id)
  locations[_id].starred = false
  return {
    ...state,
    locations,
  }
}

export const subscribeLocationsAdded = (state = locationsDefaultState, action) => {
  const { locations } = state  
  locations.push(action.location)
  return {
    ...state,
    locations,
  }
}
export const subscribeLocationsRemoved = (state = locationsDefaultState, action) => {
  let { locations } = state  
  locations = locations.filter((l) => l.id !== action.location.id)
  return {
    ...state,
    locations,
  }
}
export const subscribeLocationsFailed = (state = locationsDefaultState, action) => {}

export const locationsHandlers = {
  [TYPES.STAR_LOCATION]: starLocation,
  [TYPES.UNSTAR_LOCATION]: unstarLocation,
  [TYPES.SUBSCRIBE_LOCATIONS_ADDED]: subscribeLocationsAdded,
  [TYPES.SUBSCRIBE_LOCATIONS_REMOVED]: subscribeLocationsRemoved,
  [TYPES.SUBSCRIBE_LOCATIONS_FAILED]: subscribeLocationsFailed,
}

export default createReducer(locationsDefaultState, locationsHandlers)