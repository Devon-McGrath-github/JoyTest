import { SHOW_DETAILS, HIDE_DETAILS, ADD_THING } from '../actions'

const driveImages = [
  "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-03.png?alt=media&token=5425db8b-704f-49e2-961a-0854e4b2a2ba"
]

const INITIAL_STATE = {
  selectedThing: null,
  things: [{
    id: 1,
    name: 'Red thing'
  }],
  auth: {},
  images: driveImages,
  nextPage: driveImages[0]
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case SHOW_DETAILS:
      return Object.assign({}, state, {
        selectedThing: action.id
      })
    case HIDE_DETAILS:
      return Object.assign({}, state, {
        selectedThing: null
      })
    case ADD_THING:
    // This is an alternative that uses the ES6 spread operator
    // return Object.assign({}, state, {
    //   things: [
    //     ...state.things,
    //     {
    //       id: state.things.length + 1,
    //       name: action.name
    //     }
    //   ]
    // })

      // create copy of existing state
      const newState = Object.assign({}, state)
      newState.things = state.things.slice()

      // add new thing
      newState.things.push({
        id: state.things.length + 1,
        name: action.name
      })

      return newState
    default:
      return state
  }
}
