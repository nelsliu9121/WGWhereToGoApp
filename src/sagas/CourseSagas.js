import { call, put, takeEvery } from 'redux-saga/effects'
import { getAll } from 'firebase-saga'

import { CourseTypes, CourseCreators } from '../actions/CourseActions'

export const fetchCourses = function * (locationId, roomId, year, month) {
  try {
    const courses = yield call(getAll, `Courses/${locationId}/${roomId}/${year}/${month}`)
    yield put(CourseCreators.coursesReceived(courses))
  } catch (error) {
    yield put(CourseCreators.fetchCoursesFailed(error))
  }
}

export const watchFetchCourses = function * () {
  yield takeEvery(CourseTypes.FETCH_COURSES, fetchCourses)
}

export default [
  watchFetchCourses,
]
