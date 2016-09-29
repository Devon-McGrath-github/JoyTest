// import { } from '../actions'

const allImages = {
  "nextArrow": "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-03.png?alt=media&token=5425db8b-704f-49e2-961a-0854e4b2a2ba",
  "previousArrow": "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-04.png?alt=media&token=9a2967b6-9333-40a1-a081-c4b2b556a4c4",
  "megaPhone": "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FBranding-54.png?alt=media&token=992d64a3-cb79-47d7-a495-3a9b4ccb12f7",
  "buttonUnticked": "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-01.png?alt=media&token=f3f4247b-e595-4dc0-bc49-5aa3a08b53a3",
  "buttonTicked": "https://firebasestorage.googleapis.com/v0/b/wotwot-4b943.appspot.com/o/images%2FcoursesButtons-02.png?alt=media&token=55c14110-114c-44ac-a592-64cefeb8c153"
}

const INITIAL_STATE = {
  storedImages: allImages
}

export default (state = INITIAL_STATE , action) => {
  return state
  // switch (action.type) {
  //
  //   default:
  // }
}
