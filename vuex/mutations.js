import types from './mutation-types'
export default {
  [types.SET_USER_STATE]: (state, payload) => {
    state.user = payload
  },
  [types.SET_YEAR_STATE]: (state, payload) => {
    state.year = payload
  },
  [types.SET_SEMESTER_STATE]: (state, payload) => {
    state.semester = payload
  }
}
