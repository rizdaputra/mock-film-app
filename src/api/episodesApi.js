import axios from 'axios';

const API_URL = 'https://run.mocky.io/v3/4ea9d557-469b-46ef-a256-697925677bfd';

export const getEpisodes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    return [];
  }
};