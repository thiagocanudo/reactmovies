import axios from 'axios';

const API_KEY = '81154aa94ab4961e8bc2a66dad78bf47';
const BASE_URL = 'https://api.themoviedb.org/3';

// https://api.themoviedb.org/3/movie/popular
// https://api.themoviedb.org/3/tv/popular

// https://api.themoviedb.org/3/movie/popular?api_key=81154aa94ab4961e8bc2a66dad78bf47
// https://api.themoviedb.org/3/tv/popular?api_key=81154aa94ab4961e8bc2a66dad78bf47

// Função que irá buscar os itens (filmes e series)

// não existe uma função 'awayt' sem que esteja dentro de uma função 'asyncrona'
export async function getDados(categoria) {
  // a condição com filmes em minusculo sempre caia em tv
  const endpoint = categoria == 'Filmes' ? 'movie' : 'tv';
  console.log('endpoint: ', endpoint);

  const response = await axios.get(`${BASE_URL}/${endpoint}/popular`, {
    params: {
      api_key: API_KEY,
      language: 'PT-BR',
      page: 1,
    },
  });

  return response.data.results;
}
