import { useEffect, useState } from 'react';
import { getTopFilms } from '../api/topfilms.api';

export function TopFilmsList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function loadTopFilms() {
      const res = await getTopFilms();
      setFilms(res.data.top_films);
    }
    loadTopFilms();
  }, []);

  return (
    <div>
      <h2>Top Films</h2>
      <ul>
        {films.map((film, index) => (
          <li key={index}>
            <p>{film.title}</p>
            <p>{film.description}</p>
            <p>Rental Count: {film.rental_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



