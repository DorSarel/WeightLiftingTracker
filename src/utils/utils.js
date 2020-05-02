export const checkEmail = (emailToCheck) => {
  let emailErrorMessage = '';

  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailToCheck) {
    emailErrorMessage = 'Email cannot be blank';
  } else if (!re.test(String(emailToCheck).toLowerCase())) {
    emailErrorMessage = 'Email format is invalid';
  }

  return emailErrorMessage;
};

export const checkPassword = (
  passwordToCheck,
  minAllowedLength,
  maxAllowedLength
) => {
  let passwordErrorMessage = '';

  if (passwordToCheck === '') {
    passwordErrorMessage = 'Password cannot be blank';
  } else if (
    passwordToCheck.length < minAllowedLength ||
    passwordToCheck.length > maxAllowedLength
  ) {
    passwordErrorMessage = `Password must be between ${minAllowedLength} and ${maxAllowedLength}`;
  }

  return passwordErrorMessage;
};

export const checkNumberInput = (
  inputToCheck,
  inputName,
  minAllowedLength,
  maxAllowedLength
) => {
  let inputErrorMessage = '';

  if (inputToCheck === '') {
    inputErrorMessage = `${inputName} cannot be blank`;
  } else if (
    inputToCheck < minAllowedLength ||
    inputToCheck > maxAllowedLength
  ) {
    inputErrorMessage = `${inputName} value must be between ${minAllowedLength} and ${maxAllowedLength}`;
  }

  return inputErrorMessage;
};

export const getMaxValue = (trackedExerciseWeights) =>
  trackedExerciseWeights.reduce(
    (max, currentValue) => Math.max(max, currentValue.weight),
    trackedExerciseWeights[0].weight
  );

export const getAvgValue = (trackedExerciseWeights) => {
  let totalWeightsValue = trackedExerciseWeights.reduce(
    (totalSum, currentValue) => {
      return totalSum + currentValue.weight;
    },
    0
  );
  return totalWeightsValue / trackedExerciseWeights.length;
};

export const sortObjectsByDate = (firstDateObject, secondDateObjcet) =>
  secondDateObjcet.createdAt - firstDateObject.createdAt;
