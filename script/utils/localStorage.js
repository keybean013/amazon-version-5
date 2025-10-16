export function loadFromStorage (key) {
  return JSON.parse(localStorage.getItem(key));
}

export function saveToStorage(key, data) {

  localStorage.setItem(key, JSON.stringify(data));

}