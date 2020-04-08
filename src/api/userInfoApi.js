const baseURL =
  'https://weightliftingtracker-ea4e9.firebaseio.com/userInfo.json';

export function getUserInfo() {
  return fetch(baseURL)
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}
