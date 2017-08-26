import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  starLocation: ['id'],
  unstarLocation: ['id'],
  fetchLocations: [], 
  fetchLocationsFailed: ['error'], 
  locationsReceived: ['locations'], 
  subscribeLocations: [],
  subscribeLocationsAdded: ['location'],
  subscribeLocationsRemoved: ['location'],
  subscribeLocationsFailed: ['error'],
}, {})