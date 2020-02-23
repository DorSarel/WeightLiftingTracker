import React, { createContext, useReducer } from 'react';

const UserContext = createContext();
const initialState = {
  id: 1,
  username: 'Dor Sarel',
  personal_info: {
    age: {
      value: 26,
      unit: '',
    },
    weight: {
      value: 76.1, // assuming weight in KG
      unit: 'Kg',
    },
    height: {
      value: 173, // assuming height in cm
      unit: 'cm',
    },
    fat: {
      value: 13.5,
      unit: '%',
    },
  },
  weights: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        personal_info: {
          ...state.personal_info,
          age: { ...state.personal_info.age },
          weight: { ...state.personal_info.weight },
          height: { ...state.personal_info.height },
          fat: { ...state.personal_info.fat },
        },
      };
    default:
      return state;
  }
};

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state }}>{children}</UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
