import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import defaultPoster from 'image/default_poster.jpg';
import {
  ListMovies,
  ItemMovies,
  ImageMovies,
  LinkMovie,
  TitleMovie,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <ListMovies>
        {movies.map(({ id, poster_path, title }) => {
          const base_url = 'https://image.tmdb.org/t/p/w500';
          return (
            <ItemMovies key={id}>
              <LinkMovie to={`/movies/${id}`} state={{ from: location }}>
                <ImageMovies
                  src={
                    poster_path ? `${base_url}${poster_path}` : defaultPoster
                  }
                  alt={title}
                />
                <TitleMovie>{`${title}`}</TitleMovie>
              </LinkMovie>
            </ItemMovies>
          );
        })}
      </ListMovies>
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
