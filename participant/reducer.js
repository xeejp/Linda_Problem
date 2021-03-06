function reducer(state = {}, action) {
  const { type, payload } = action
  switch (type) {
    case "FETCH_CONTENTS":
      return Object.assign({}, state, {
        page: action.page,
        status: action.status,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    case "ADD_USER":
      return Object.assign({}, state, {
        join_experiment: action.join_experiment,
      })

    case "CHANGE_PAGE":
      return Object.assign({}, state, {
        page: action.page,
        status: action.status,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    case "SUBMIT_ANSWER":
      return Object.assign({}, state, {
        status: action.status,
        ans_programmer: action.ans_programmer,
        ans_banker: action.ans_banker,
        ans_each: action.ans_each,
        join_experiment: action.join_experiment,
      })

    default:
      return state
  }
}

export default reducer
