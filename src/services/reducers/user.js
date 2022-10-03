import { SET_USER_DATA } from "../../utils/constants";

const userState = {
  email: '',
  name: ''
}

const user = (state = userState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        email: action.email,
        name: action.name
      }

    default:
      return state;
  }
}

export default user;