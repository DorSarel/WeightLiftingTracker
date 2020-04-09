const baseURL =
  'https://weightliftingtracker-ea4e9.firebaseio.com/userInfo.json';

export function getUserInfo() {
  return fetch(baseURL)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

export function saveUserInfo(dbKey, updatedUserInfo) {
  return fetch(baseURL + `/${dbKey}`, {
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
