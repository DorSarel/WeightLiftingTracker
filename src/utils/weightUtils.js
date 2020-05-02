export const createExerciseToSave = (exerciseData, allUserWeights) => {
  const { exercise, weight, rounds, reps, createdAt } = exerciseData;
  let dataObject = { weight, rounds, reps, createdAt };

  // handle first time key
  let exerciseDataToSave = {};
  exerciseDataToSave.current = weight;
  exerciseDataToSave.exercise = exercise;
  if (!allUserWeights || !allUserWeights[exercise]) {
    exerciseDataToSave.previous = 0;
    exerciseDataToSave.data = [dataObject];
  } else {
    exerciseDataToSave.previous = allUserWeights[exercise].current;
    exerciseDataToSave.data = [...allUserWeights[exercise].data, dataObject];
  }

  return exerciseDataToSave;
};

export const createExerciseToRevert = (exerciseToRevert, allUserWeight) => {
  const indexToRemove = allUserWeight[exerciseToRevert].data.length - 1;
  const indexToUseForPrevious =
    allUserWeight[exerciseToRevert].exerciseDataToSave.length - 3;
  const previousDataObj =
    allUserWeight[exerciseToRevert].data[indexToUseForPrevious];

  const exerciseDataToUpdate = {
    ...allUserWeight[exerciseToRevert],
  };
  exerciseDataToUpdate.current = exerciseDataToUpdate.previous;
  exerciseDataToUpdate.previous = previousDataObj ? previousDataObj.weight : 0;
  exerciseDataToUpdate.data = exerciseDataToUpdate.data.filter(
    (_, idx) => idx !== indexToRemove
  );

  return exerciseDataToUpdate;
};
