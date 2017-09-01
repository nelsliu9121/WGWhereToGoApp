import { combineReducers } from 'redux'

import LocationsReducers from './LocationReducers'
import CourseReducers from './CourseReducers'

export default combineReducers({
  Locations: LocationsReducers,
  Courses: CourseReducers,
})
