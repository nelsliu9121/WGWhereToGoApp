import { createReducer } from 'reduxsauce'

import { Types as TYPES } from '../actions/locationsActions'

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

export const locationsHandlers = {
  [TYPES.STAR_LOCATION]: starLocation,
}

export default createReducer(locationsDefaultState, locationsHandlers)