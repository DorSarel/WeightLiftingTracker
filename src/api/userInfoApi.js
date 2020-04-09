const baseURL = 'https://weightliftingtracker-ea4e9.firebaseio.com/userInfo';

export function getUserInfo() {
  return fetch(baseURL + '.json')
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

export function saveUserInfo(dbKey, updatedUserInfo) {
  return fetch(baseURL + `/${dbKey}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUserInfo),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
