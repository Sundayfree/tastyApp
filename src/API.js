export function get(url = '') {
  return fetch(`${url}&apiKey=c47de52d90e444538dbf7cc71fb431fc`).then(res =>
    res.json()
  );
}
