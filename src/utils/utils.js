export const checkEmail = (emailToCheck) => {
  let isEmailValid = {
    error: null,
  };

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailToCheck === '') {
    isEmailValid.error = 'Email cannot be blank';
  } else if (!re.test(String(emailToCheck).toLowerCase())) {
    isEmailValid.error = 'Email format is invalid';
  }

  return isEmailValid;
};

export const checkPassword = (
  passwordToCheck,
  minAllowedLength,
  maxAllowedLength
) => {
  let isPasswordValid = {
    error: null,
  };

  if (passwordToCheck === '') {
    isPasswordValid.error = 'Password cannot be blank';
  } else if (
    passwordToCheck.length < minAllowedLength ||
    passwordToCheck.length > maxAllowedLength
  ) {
    isPasswordValid.error = `Password must be between ${minAllowedLength} and ${maxAllowedLength}`;
  }

  return isPasswordValid;
};

export const checkNumberInput = (
  inputToCheck,
  inputName,
  minAllowedLength,
  maxAllowedLength
) => {
  let isInputValid = {
    error: null,
  };

  if (inputToCheck === '') {
    isInputValid.error = `${inputName} cannot be blank`;
  } else if (
    inputToCheck < minAllowedLength ||
    inputToCheck > maxAllowedLength
  ) {
    isInputValid.error = `${inputName} value must be between ${minAllowedLength} and ${maxAllowedLength}`;
  }

  return isInputValid;
};

export const getMaxValue = (trackedExerciseWeights) =>
  trackedExerciseWeights.reduce(
    (max, currentValue) => Math.max(max, currentValue.value),
    trackedExerciseWeights[0].value
  );

export const getAvgValue = (trackedExerciseWeights) => {
  let totalWeightsValue = trackedExerciseWeights.reduce(
    (totalSum, currentValue) => {
      return totalSum + currentValue.value;
    },
    0
  );
  return totalWeightsValue / trackedExerciseWeights.length;
};
