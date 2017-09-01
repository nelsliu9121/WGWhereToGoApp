import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  starCourse: ['locationId', 'roomId', 'year', 'month', 'weekday', 'id'],
  unstarCourse: ['locationId', 'roomId', 'year', 'month', 'weekday', 'id'],
  fetchCourses: ['locationId', 'roomId', 'year', 'month'],
  fetchCoursesFailed: ['error'],
  coursesReceived: ['courses'],
}, {})

export { Types as CourseTypes, Creators as CourseCreators }
