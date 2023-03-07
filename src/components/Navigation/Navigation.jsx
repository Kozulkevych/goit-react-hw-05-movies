import React from 'react';
import { Nav, NavList, LinkNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <LinkNav to="/">Home</LinkNav>
        </li>
        <li>
          <LinkNav to="movies">Movies</LinkNav>
        </li>
      </NavList>
    </Nav>
  );
};
