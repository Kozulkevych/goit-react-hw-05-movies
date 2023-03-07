import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 30px;
  padding: 36px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 15px;
`;

export const Author = styled.p`
  font-weight: 600;
  font-size: 18px;
  font-style: italic;
  display: flex;
  width: max-content;
  margin: 0;
`;

export const Content = styled.p`
  font-size: 16px;
  text-indent: 5%;
  text-align: justify;
  margin: 0;
`;
