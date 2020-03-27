import React, { createContext, useEffect, useReducer } from 'react';

const UserContext = createContext();
// const initialState = {
//   id: 1,
//   username: 'Dor Sarel',
//   personal_info: {
//     age: {
//       value: 26,
//       unit: '',
//     },
//     weight: {
//       value: 76.1, // assuming weight in KG
//       unit: 'Kg',
//     },
//     height: {
//       value: 173, // assuming height in cm
//       unit: 'cm',
//     },
//     fat: {
//       value: 13.5,
//       unit: '%',
//     },
//   },
//   weights: null,
// };
const initialState = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        user: {
          ...state.user,
          personal_info: {
            ...state.personal_info,
            age: { ...state.personal_info.age },
            weight: { ...state.personal_info.weight },
            height: { ...state.personal_info.height },
            fat: { ...state.personal_info.fat },
            ...action.payload,
          },
        },
      };
    case 'ADD_NEW_WEIGHT':
      const { payload } = action;
      const { weights } = state;
      const liftKey = Object.keys(payload)[0]; // assuming only one key per request
      let updatedWeight = {};
      if (!weights || !weights.hasOwnProperty(liftKey)) {
        // new key or first key
        updatedWeight['last'] = 0;
        updatedWeight['current'] = payload[liftKey];
        updatedWeight['allData'] = [
          { value: payload[liftKey], added: Date.now() },
        ];
      } else {
        // updating key
        updatedWeight['last'] = weights[liftKey]['current'];
        updatedWeight['current'] = payload[liftKey];
        updatedWeight['allData'] = [
          ...weights[liftKey]['allData'],
          { value: payload[liftKey], added: Date.now() },
        ];
      }
      return {
        ...state,
        user: {
          ...state.user,
          weights: {
            ...state.weights,
            [liftKey]: {
              ...updatedWeight,
            },
          },
        },
      };
    case 'SET_USER_FROM_DB':
      return {
        ...state,
        user: { ...action.payload },
      };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(
        'https://weightliftingtracker-ea4e9.firebaseio.com/users.json'
      );
      const responseData = await response.json();
      // console.log(responseData['-M3T32p4ALMVlqkQr5Dr']);
      const user = { ...responseData['-M3T32p4ALMVlqkQr5Dr'] };
      dispatch({ type: 'SET_USER_FROM_DB', payload: user });
    }
    fetchUserData();
  }, []);

  const updateUserInfo = payload => {
    dispatch({ type: 'UPDATE_USER_INFO', payload });
  };

  const addNewUserWeight = payload => {
    dispatch({ type: 'ADD_NEW_WEIGHT', payload });
  };
  console.log(state);
  return (
    <UserContext.Provider
      value={{ user: state.user, updateUserInfo, addNewUserWeight }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
