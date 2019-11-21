import types from './mutation-types'
export default {
  [types.SET_CATEGORY_ID]: (state, payload) => {
    state.categoryId = payload
  }
}
