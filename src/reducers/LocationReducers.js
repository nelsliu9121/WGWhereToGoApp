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

export const locationsReceived = (state = locationsDefaultState, action) => {
  const { locations } = action
  return {
    ...state,
    locations,
  }
}

export const fetchLocationsFailed = (state = locationsDefaultState, action) => {
  const { error } = action
  console.error(error)
  return {
    ...state
  }
}

export const locationsHandlers = {
  [TYPES.STAR_LOCATION]: starLocation,
  [TYPES.LOCATIONS_RECEIVED]: locationsReceived,
  [TYPES.FETCH_LOCATIONS_FAILED]: fetchLocationsFailed,
}

export default createReducer(locationsDefaultState, locationsHandlers)