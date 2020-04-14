export const updateExreciseWeight = (
  allExrecisesWeights,
  exreciseToUpdate,
  dataToUpdate
) => {
  let updatedWeight = {};
  if (
    !allExrecisesWeights ||
    !allExrecisesWeights.hasOwnProperty(exreciseToUpdate)
  ) {
    // new key or first key
    updatedWeight['last'] = 0;
    updatedWeight['current'] = dataToUpdate[exreciseToUpdate];
    updatedWeight['allData'] = [
      { value: dataToUpdate[exreciseToUpdate], added: Date.now() },
    ];
  } else {
    // updating key
    updatedWeight['last'] = allExrecisesWeights[exreciseToUpdate]['current'];
    updatedWeight['current'] = dataToUpdate[exreciseToUpdate];
    updatedWeight['allData'] = [
      ...allExrecisesWeights[exreciseToUpdate]['allData'],
      { value: dataToUpdate[exreciseToUpdate], added: Date.now() },
    ];
  }
  return updatedWeight;
};
