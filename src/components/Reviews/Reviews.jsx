import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'services/moviesApi';
import { ReviewsList, ReviewItem, Author, Content } from './Rewiews.styled';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieReviews(id);
        setReviews(result);
      } catch (error) {
        toast.error('Sorry, there was an error, please try again later');
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {reviews &&
        (reviews.length === 0 ? (
          <p>We don't have any reviews for this movie</p>
        ) : (
          <ReviewsList>
            {reviews.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <Author>Author: {author} </Author>
                <Content>{content}</Content>
              </ReviewItem>
            ))}
          </ReviewsList>
        ))}
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Reviews;
