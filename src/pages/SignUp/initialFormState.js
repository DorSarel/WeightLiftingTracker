export const textInitialFormState = {
  email: {
    value: '',
  },
  password: {
    value: '',
    validation: {
      min: 6,
      max: 12,
    },
  },
  firstName: {
    value: '',
  },
  lastName: {
    value: '',
  },
};

export const numberInitialFormState = {
  age: {
    value: 0,
    validation: {
      min: 10,
      max: 150,
    },
  },
  weight: {
    value: 0,
    validation: {
      min: 30,
      max: 350,
    },
  },
  height: {
    value: 0,
    validation: {
      min: 100,
      max: 250,
    },
  },
  fat: {
    value: 0,
    validation: {
      min: 0,
      max: 100,
    },
  },
};
