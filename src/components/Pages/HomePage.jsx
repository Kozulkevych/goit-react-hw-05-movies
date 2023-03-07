import React, { useState, useEffect } from 'react';
import { getTrending } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);

  // function fetchMovies(page) {
  //   getTrending(page).then(setMovies);
  // }
  // useEffect(() => {
  //   fetchMovies(page);
  // }, [page]);
  useEffect(() => {
    const fetchMovies = async page => {
      setIsLoading(true);
      try {
        const result = await getTrending(page);
        setMovies(result);
      } catch (error) {
        toast.error('Sorry, there was an error, please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies(page);
  }, [page]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    movies && (
      <>
        <h1>TRENDING TODAY</h1>
        {isloading && <Loader />}
        <MoviesList movies={movies} />
        <Button text="Load more" onClick={loadMore} />
        <Outlet />
      </>
    )
  );
};

export default HomePage;
