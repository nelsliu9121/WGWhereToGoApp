import { createReducer } from 'reduxsauce'

import { CourseTypes as TYPES } from '../actions/CourseActions'

export const courseDefaultState = {
  courses: {},
}

export const starCourse = (state = courseDefaultState, action) => {
  state[action.weekday][action.id].starred = true
  return {
    ...state,
  }
}

export const fetchCoursesFailed = (state = courseDefaultState, action) => {
  console.error(action.error)
  return state
}

export const coursesReceived = (state = courseDefaultState, action) => {
  return {
    ...state,
    courses: action.courses,
  }
}

export const coursesHandler = {
  [TYPES.COURSES_RECEIVED]: coursesReceived,
  [TYPES.FETCH_COURSES_FAILED]: fetchCoursesFailed,
  [TYPES.STAR_COURSE]: starCourse,
}

export default createReducer(courseDefaultState, coursesHandler)
