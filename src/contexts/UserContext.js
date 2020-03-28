import React, { createContext, useEffect, useReducer } from 'react';
import { updateExreciseWeight } from './utils';

const UserContext = createContext();
const initialState = {
  user: null,
  uid: null,
  isFetching: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'ADD_NEW_WEIGHT':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case 'SET_USER_FROM_DB':
      return {
        ...state,
        user: { ...action.payload.user },
        uid: action.payload.uid,
        isFetching: false,
      };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUserData(userID) {
      try {
        const response = await fetch(
          `https://weightliftingtracker-ea4e9.firebaseio.com/users/${userID}.json`
        );
        const responseData = await response.json();
        const user = { ...responseData };
        dispatch({ type: 'SET_USER_FROM_DB', payload: { user, uid: userID } });
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchUserData('-M3T32p4ALMVlqkQr5Dr');
  }, []);

  const updateUserInfo = async payload => {
    const { uid } = state;
    const updatedUser = {
      ...state.user,
      personal_info: { ...state.user.personal_info, ...payload },
    };
    // Update user info on server
    try {
      const response = await fetch(
        `https://weightliftingtracker-ea4e9.firebaseio.com/users/${uid}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      );
      dispatch({ type: 'UPDATE_USER_INFO', payload: { ...updatedUser } });
    } catch (err) {
      console.error(err.message);
    }
  };

  const addNewUserWeight = async payload => {
    const { weights } = state.user;
    const exreciseToUpdate = Object.keys(payload)[0]; // assuming only one key per request
    const updatedWeight = updateExreciseWeight(
      weights,
      exreciseToUpdate,
      payload
    );
    const updatedUser = {
      ...state.user,
      weights: {
        ...state.user.weights,
        [exreciseToUpdate]: { ...updatedWeight },
      },
    };
    // Update weights on server
    try {
      const response = await fetch(
        `https://weightliftingtracker-ea4e9.firebaseio.com/users/${state.uid}.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        }
      );
      dispatch({ type: 'ADD_NEW_WEIGHT', payload: { ...updatedUser } });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <UserContext.Provider
      value={{ user: state.user, updateUserInfo, addNewUserWeight }}
    >
      {state.isFetching ? <h1>Loading...</h1> : children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
