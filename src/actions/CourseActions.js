import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  starCourse: ['id'],
  unstarCourse: ['id'],
  fetchCourses: ['locationId', 'roomId'],
  fetchCoursesFailed: ['error'],
  coursesReceived: ['locations'],
}, {})

export { Types as CourseTypes, Creators as CourseCreators }
