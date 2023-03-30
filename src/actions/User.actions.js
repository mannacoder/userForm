const STORE_USER_DETAIL = "store_user_detail";
const CURRENT_LOGGED_IN_USER = "current_logged_in_user";
const CHANGE_PROFILE_PIC = "change_profile_pic";

export const storeUsersData = (usersData) => {
  return {
    type: STORE_USER_DETAIL,
    payload: usersData,
  };
};

export const currentLoggedInUser = (usersData) => {
  return {
    type: CURRENT_LOGGED_IN_USER,
    payload: usersData,
  };
};

export const changeProfilePic = (usersData) => {
  return {
    type: CHANGE_PROFILE_PIC,
    payload: usersData,
  };
};

export { STORE_USER_DETAIL, CURRENT_LOGGED_IN_USER, CHANGE_PROFILE_PIC };
