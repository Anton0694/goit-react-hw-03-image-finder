import axios from 'axios';

const API_KEY = '33728969-9775eae80f251fb0a0fdb38c1'

export const getGallery = (searchText, page) => {

return axios.get(`https://pixabay.com/api/?q=${searchText}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`)
}