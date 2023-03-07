import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { getSearchMovies } from 'services/moviesApi';
import { MoviesList } from 'components/MoviesList/MoviesList';

const SearchPage = () => {
  const [movies, setMovies] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const result = await getSearchMovies(query);
        if (result.length <= 0) {
          return toast.error(`Sorry, no movies with title "${query}" found`);
        }
        setMovies(result, 1);
      } catch (error) {
            toast.error('Sorry, there was an error, please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  const handleSearchFormSubmit = query => {
    setSearchParams({ query });
  };
  return (
    <>
          <main>
                 {isloading && <Loader />}
              <SearchForm onSubmit={handleSearchFormSubmit} />
              {movies && <MoviesList movies={movies} />}
      </main>
    </>
  );
};

export default SearchPage;