import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMovieDetails } from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import { Button } from 'components/Button/Button';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  const navigate = useNavigate();
  const from = location.state?.from ?? '/';
  const onGoBack = () => navigate(from);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieDetails(id);
        setMovie(result);
      } catch (error) {
        toast.error('Sorry, there was an error, please try again later');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Button text="Go back" onClick={onGoBack} />
      {isloading && <Loader />}
      {movie.title && <MovieDetails movie={movie} />}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
