import { SHOW_DETAILS, HIDE_DETAILS, ADD_THING } from '../actions'

const driveImages = [
  "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-03.png?alt=media&token=5425db8b-704f-49e2-961a-0854e4b2a2ba"
]

const INITIAL_STATE = {
  images: driveImages,
  nextPage: driveImages[0]
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {

    default:
      return state
  }
}
