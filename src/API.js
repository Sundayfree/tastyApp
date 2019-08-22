export function get(url = '') {
  return fetch(`${url}&apiKey=5853e36d512b4febb16a340deba80b45`).then(res =>
    res.json()
  );
}
