import styled from 'styled-components';

export const Btn = styled.button`
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  :hover,
  :focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
