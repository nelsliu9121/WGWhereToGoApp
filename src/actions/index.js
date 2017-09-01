import { Types as LocationTypes , Creators as LocationCreators } from './LocationActions.js'
import { CourseTypes, CourseCreators } from './CourseActions.js'

export const ActionCreators = [
  ...LocationCreators,
  ...CourseCreators,
]

export const ActionTypes = [
  ...LocationTypes,
  ...CourseTypes,
]
