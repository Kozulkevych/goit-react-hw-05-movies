import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row-reverse;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
`;

export const LinkNav = styled(NavLink)`
  color: #0d253f;
  text-decoration: none;
  font-weight: 700;
  font-size: 25px;
  &.active {
    color: blue;
  }
`;
