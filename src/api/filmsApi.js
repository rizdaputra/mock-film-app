import axios from 'axios';

const FILMS_API_URL = 'https://run.mocky.io/v3/72b64fde-f2cc-4d78-926d-d64da8bac305';
const FILM_BY_ID_API_URL = 'https://run.mocky.io/v3/2f81362d-d6c1-40ef-ae4c-6507de1d0061';

export const getFilms = async () => {
  try {
    const response = await axios.get(FILMS_API_URL);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching films:', error);
    return [];
  }
};

//only mock get by id but only return one
export const getFilmbyId = async () => {
    try {
      const response = await axios.get(FILM_BY_ID_API_URL);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching films:', error);
      return [];
    }
  };