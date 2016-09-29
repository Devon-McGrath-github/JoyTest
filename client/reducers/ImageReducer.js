// import { } from '../actions'

const driveImages = [
  "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-03.png?alt=media&token=5425db8b-704f-49e2-961a-0854e4b2a2ba",
  "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-04.png?alt=media&token=9a2967b6-9333-40a1-a081-c4b2b556a4c4"
]

const INITIAL_STATE = {
  images: driveImages,
  test: {
    placeholder: "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-03.png?alt=media&token=5425db8b-704f-49e2-961a-0854e4b2a2ba",
    placeholder2: "test url 2"
  },
  string: "hello",
  nextPage: driveImages[0]
}

export default (state = INITIAL_STATE , action) => {
  return state
  // switch (action.type) {
  //
  //   default:
  // }
}
