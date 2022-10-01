import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducers/reducers.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_USER: "SET_USER",
};

export const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in userReducer`);
  }
};

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(
    userReducer,
    INITIAL_USER_STATE
  );

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_USER, user));
  };

  const value = { currentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
