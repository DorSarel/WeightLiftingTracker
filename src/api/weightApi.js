const baseURL = 'https://weightliftingtracker-ea4e9.firebaseio.com/weights';

export function loadWeights() {
  return fetch(baseURL + '.json')
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

export function saveWeight(newWeight, dbKey) {
  let modifiedURL = baseURL;
  if (dbKey) {
    modifiedURL += `/${dbKey}.json`;
  } else {
    modifiedURL += '.json';
  }
  return fetch(modifiedURL, {
    method: dbKey ? 'PUT' : 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newWeight),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
