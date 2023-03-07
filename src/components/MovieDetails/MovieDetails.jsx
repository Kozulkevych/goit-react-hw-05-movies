import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  BoxMovie,
  WrapperMovie,
  ListMovie,
  InfoMovie,
  ImageMovie,
  OverviewContent,
  GenresMovie,
  TitleMovie,
  SubTitleMovie,
  ItemGenre,
  LinkStyled,
} from './MovieDetails.styled';
import defaultPoster from 'image/default_poster.jpg';

export const MovieDetails = ({ movie }) => {
  const location = useLocation();
  const {
    poster_path,
    original_title,
    original_name,
    release_date,
    first_air_date,
    vote_average,
    genres,
    overview,
  } = movie;
  const base_url = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      <BoxMovie>
        <ImageMovie
          src={poster_path ? `${base_url}${poster_path}` : defaultPoster}
          alt={original_title}
          width="300"
        />
        <WrapperMovie>
          <TitleMovie>
            {original_title ?? original_name} (
            <span>{parseInt(release_date ?? first_air_date)}</span>)
          </TitleMovie>
          <OverviewContent>
            User Score: {`${Math.round(vote_average * 10)}%`}
          </OverviewContent>
          <SubTitleMovie>Overview</SubTitleMovie>
          <OverviewContent>{overview}</OverviewContent>
          <SubTitleMovie>Genres</SubTitleMovie>
          <GenresMovie>
            {genres.map((genre, index) => (
              <ItemGenre key={index}>{genre.name}</ItemGenre>
            ))}
          </GenresMovie>
        </WrapperMovie>
      </BoxMovie>
      <InfoMovie>
        <SubTitleMovie>Additional Information</SubTitleMovie>
        <ListMovie>
          <li>
            <LinkStyled to="cast" state={location.state}>
              Cast
            </LinkStyled>{' '}
          </li>
          <li>
            <LinkStyled to="reviews" state={location.state}>
              Reviews
            </LinkStyled>{' '}
          </li>
        </ListMovie>
      </InfoMovie>
    </>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    vote_average: PropTypes.number,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string,
  }),
};
