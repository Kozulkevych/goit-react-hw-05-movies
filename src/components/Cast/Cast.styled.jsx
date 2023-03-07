import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

export const CastItem = styled.li`
  text-align: center;
  width: 210px;
`;

export const ActorImg = styled.img`
  border-radius: 8px;
  display: block;
  width: 100%;
  height: 320px;
`;

export const ActorName = styled.p`
  font-weight: 600;
`;
