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
