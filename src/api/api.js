const KEY_API = '37101348-01b9475ae8f5d0f542cc9660e';

// Fetch
function fetchImages(searchValue, page) {
  return fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Немає фото за таким запитом'));
  });
}
const api = {
  fetchImages,
};
export default api;
