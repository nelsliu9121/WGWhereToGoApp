import { createReducer } from 'reduxsauce'

import { CourseTypes } from '../actions/CourseActions'

export const courseDefaultState = {
  courses: {},
}

export const starCourse = (state = courseDefaultState, action) => {

  return {
    ...state,
  }
}
