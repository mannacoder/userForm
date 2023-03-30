import {
  CURRENT_LOGGED_IN_USER,
  STORE_USER_DETAIL,
  CHANGE_PROFILE_PIC,
} from "../actions/User.actions";

const initialState = {
  users: [],
  currentUser: null,
  profileImage:
    "https://www.kindpng.com/picc/m/33-338711_circle-user-icon-blue-hd-png-download.png",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_DETAIL: {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    }
    case CURRENT_LOGGED_IN_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case CHANGE_PROFILE_PIC: {
      return {
        ...state,
        profileImage: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
