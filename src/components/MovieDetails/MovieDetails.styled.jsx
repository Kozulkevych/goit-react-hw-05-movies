import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxMovie = styled.div`
  display: flex;
  gap: 20px;
  font-weight: 500;
  padding: 30px;
`;

export const WrapperMovie = styled.div`
  font-size: 18px;
`;

export const ImageMovie = styled.img`
  border-radius: 8px;
`;

export const OverviewContent = styled.p`
  text-align: justify;
`;

export const ListMovie = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding-left: 0;
`;

export const InfoMovie = styled.div`
  height: auto;
  padding: 10px 30px;

  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;

export const GenresMovie = styled.ul`
  display: flex;
  margin-left: 0;
  padding-left: 0;
`;

export const TitleMovie = styled.h2`
  text-transform: uppercase;
  letter-spacing: 1.7;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700px;
  margin-top: 0;
`;

export const SubTitleMovie = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1.7;
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 500px;
`;
export const ItemGenre = styled.li`
  list-style: none;
  margin-right: 20px;
`;

export const LinkStyled = styled(Link)`
  color: #0d253f;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  :hover,
  :focus {
    color: blue;
  }
  &.active {
    color: blue;
  }
`;
