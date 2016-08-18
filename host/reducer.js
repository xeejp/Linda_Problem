const initialState = {
  page: "waiting",
  users: {},
  ans_programmer: 0,
  ans_banker: 0,
  ans_each: 0,
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case "ADD_USER" :
      console.log("ADD_USER")
      return Object.assign({}, state, {
        users: action.users,
      })

    case "CHANGE_PAGE":
      console.log("CHANGE_PAGE")
      return Object.assign({}, state, {
        page: action.page,
      })

    case "FETCH_CONTENTS":
      console.log("FETCH_CONTENTS")
      return Object.assign({}, state, {
        page: action.page,
        users: action.users,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
      })

    default:
      return state
  }
}

export default reducer
