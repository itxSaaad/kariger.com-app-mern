import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  adminUserLoginReducer,
  adminUserRegisterReducer,
  adminUserUpdateProfileReducer,
} from "./reducers/adminReducers.js";
import {
  categoryListReducer,
  technicianDetailsReducer,
  technicianUserDeleteReducer,
  technicianUserListReducer,
  technicianUserLoginReducer,
  technicianUserRegisterReducer,
  technicianUserUpdateProfileReducer,
} from "./reducers/technicianReducers.js";
import {
  logoutReducer,
  userDeleteReducer,
  userListReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  userDetailsReducer,
} from "./reducers/userReducers.js";
import { orderCreateReducer } from "./reducers/orderReducers.js";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userList: userListReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userDetails: userDetailsReducer,
  userDelete: userDeleteReducer,
  adminUserLogin: adminUserLoginReducer,
  adminUserRegister: adminUserRegisterReducer,
  adminUserUpdateProfile: adminUserUpdateProfileReducer,
  technicianUserLogin: technicianUserLoginReducer,
  technicianUserRegister: technicianUserRegisterReducer,
  technicianUserDelete: technicianUserDeleteReducer,
  technicianUserUpdateProfile: technicianUserUpdateProfileReducer,
  technicianDetails: technicianDetailsReducer,
  technicianUserList: technicianUserListReducer,
  orderCreate: orderCreateReducer,
  logout: logoutReducer,
  categoryList: categoryListReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const adminUserInfoFromStorage = localStorage.getItem("adminUserInfo")
  ? JSON.parse(localStorage.getItem("adminUserInfo"))
  : null;

const techUserInfoFromStorage = localStorage.getItem("techUserInfo")
  ? JSON.parse(localStorage.getItem("techUserInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  adminUserLogin: { adminUserInfo: adminUserInfoFromStorage },
  technicianUserLogin: { techUserInfo: techUserInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
