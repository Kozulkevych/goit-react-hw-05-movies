import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ListMovies = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const LinkMovie = styled(Link)`
  display: block;
  text-decoration: none;
  width: 260px;
  font-size: 16px;
  font-weight: 700;
  color: #0d253f;
`;

export const ItemMovies = styled.li`
  text-align: center;
  justify-content: center;
  position: relative;
  background-color: #e1dfde;
  border-radius: 8px;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const ImageMovies = styled.img`
  width: 100%;
  display: block;
`;
export const TitleMovie = styled.p`
  display: flex;
  font-size: 16px;
  margin: 0;
  padding: 15px;
  justify-content: center;
  text-align: center;
`;
