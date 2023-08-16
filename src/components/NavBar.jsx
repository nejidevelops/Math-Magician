import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Navbar>
        <Label>
          Math Magicians
        </Label>
        <Links>
          <Navlinks>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calculator">Calculator</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
          </Navlinks>
        </Links>
      </Navbar>
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
`;

const Label = styled.div`
  color: #12ae23;
  font-size: 2rem;
  font-weight: 600;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

const Navlinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  li {
    cursor: pointer;
    font-size: 1.2rem;
  }
  a {
    text-decoration: none;
    color: #12ae23;
    font-weight: 600;
    transition: all 0.2s ease;
    &:hover {
      color: #12e223;
      text-decoration: underline;
    }
  }
`;

export default NavBar;
