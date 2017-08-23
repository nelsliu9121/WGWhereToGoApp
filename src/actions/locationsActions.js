import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  starLocation: ['id'],
  unstarLocation: ['id'],
}, {})