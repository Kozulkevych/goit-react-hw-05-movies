import styled from 'styled-components';

export const FormSearch = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  padding: 20px 50px;
  margin-bottom: 30px;
  align-items: center;
  overflow: hidden;
`;

export const InputSearch = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  outline: none;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const BtnSearch = styled.button`
  border-radius: 6px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  padding: 8px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  :hover,
  :focus {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;
