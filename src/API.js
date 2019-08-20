export function get(url = '') {
  return fetch(`${url}&apiKey=498ceea7d15b4972af1a65502127dd96`).then(res =>
    res.json()
  );
}
