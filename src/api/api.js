const KEY_API = '37101348-01b9475ae8f5d0f542cc9660e';

export const getImages = (searchValue, page) => {
  fetch(
    `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
};
