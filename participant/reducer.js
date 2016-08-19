function reducer(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case "FETCH_CONTENTS":
      return Object.assign({}, state, {
        page: action.page,
        status: action.status,
      })

    case "CHANGE_PAGE":
      console.log("changed")
      return Object.assign({}, state, {
        page: action.page,
        status: action.status,
      })

    case "SUBMIT_ANSWER":
      console.log("answer")
      return Object.assign({}, state, {
        status: action.status,
      })

    default:
      return state
  }
}

export default reducer
