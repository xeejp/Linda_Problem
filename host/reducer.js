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
        users: action.users,
      })

    case "FETCH_CONTENTS":
      console.log("FETCH_CONTENTS")
      return Object.assign({}, state, {
        page: action.page,
        users: action.participants,
      })

    case "SUBMIT_ANSWER":
      console.log("ok")
      return Object.assign({}, state, {
        users: action.users,
      })

    default:
      return state
  }
}

export default reducer
