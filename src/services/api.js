import axiosInstance from './../utils/axiosInstance';
import { showSuccessMessage,showErrorMessage } from './../utils/notifications';

export const getPopularFilms = async (type = 'TOP_100_POPULAR_FILMS', page = 1) => {
  try {
    const response = await axiosInstance.get('/v2.2/films/top', {
      params: {
        type,
        page,
      },
    });
    if(response.status === 200) showSuccessMessage("Фильмы успешно загружены");
    return response.data;
  } catch (error) {
    showErrorMessage('Ошибка при получении популярных фильмов:');
    throw error;
  }
};

export const searchMovies = async (keyword,page=1) =>{
  try {
    const response = await axiosInstance.get("/v2.1/films/search-by-keyword",{
      params:{
        keyword,
        page
      }
    })
    if(response.status === 200) showSuccessMessage("Фильмы успешно найдены");
    return response;
  } catch (error) {
    showErrorMessage('Ошибка поиска фильмов:');
    throw error;
  }
}


export const filterFilmsByYear = async (year, page = 1) => {
  try {
    const response = await axiosInstance.get('/v2.2/films', {
      params: {
        yearFrom: year,
        yearTo: year,
        page,
      },
    });
    if(response.status === 200) showSuccessMessage(`Фильтрация по году ${year}`);
    return response.data;
  } catch (error) {
    showErrorMessage("Ошибка при фильтрации фильмов по году:");
    throw error;
  }
};
