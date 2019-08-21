export function get(url = '') {
  return fetch(`${url}&apiKey=03754b53c557467aa02dd548c2a074bd`).then(res =>
    res.json()
  );
}
