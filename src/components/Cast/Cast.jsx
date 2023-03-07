import { useState, useEffect } from 'react';
import { getMovieCredits } from 'services/moviesApi';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import defaultImage from 'image/default_image.jpg';
import { CastList, CastItem, ActorImg, ActorName } from './Cast.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesCredits = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieCredits(id);
        setCast(result);
      } catch (error) {
        toast.error('Sorry, there was an error, please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesCredits();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {cast && cast.length > 0 ? (
        <CastList>
          {cast.map(({ id, profile_path, name, character }) => {
            const base_url_img = 'https://image.tmdb.org/t/p/w500';
            return (
              <CastItem key={id}>
                <ActorImg
                  src={
                    profile_path
                      ? `${base_url_img}${profile_path}`
                      : defaultImage
                  }
                  alt={name}
                />
                <ActorName>{name}</ActorName>
                <p>Character: {character}</p>
              </CastItem>
            );
          })}
        </CastList>
      ) : (
        <p>No information . . .</p>
      )}
    </>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};

export default Cast;