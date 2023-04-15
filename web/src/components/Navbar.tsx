import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";

import styled, { css } from "styled-components";

import { Link } from "react-router-dom";

const StyledNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
  position: relative;
  padding: 0;
  max-width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 0 1.5rem;
  font-size: ${(props) => props.theme.fontSizes.small};

  .logo {
    height: 70px;
    width: 190px;
    margin-top: 1rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-right: ${(props) => props.theme.spacing.small};
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.medium}) {
    .logo {
      max-width: none;
    }

    > div {
      gap: ${(props) => props.theme.spacing.xlarge};
      justify-content: flex-start;
    }
  }
`;

const NavItemWrapper = styled.div`
  gap: ${(props) => props.theme.spacing.small};
  display: flex;
  flex-direction: column;
  position: fixed;
  left: -400px;
  width: 300px;
  max-width: 100%;
  top: 0;
  bottom: 0;
  transition: left 0.2s;
  padding: 1.5rem;
  z-index: 1;

  &.open {
    left: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.medium}) {
    gap: ${(props) => props.theme.spacing.large};
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
    display: flex;
    flex-direction: row;
    width: auto;
    position: static;
    padding: 0;
  }
`;

const NavItem = styled(Link)`
  color: #000;
  margin-left: ${(props) => props.theme.spacing.small};
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.orange};
  }
`;

interface MobileBtnProps {
  absolute?: boolean;
}

const MobileNavBtn = styled.div<MobileBtnProps>`
  display: flex;
  justify-content: flex-end;
  width: 1.5rem;
  height: 1.5rem;
  color: #000;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.absolute &&
    css`
      position: absolute;
      right: 0;
      top: 0;
    `}

  @media screen and (min-width: ${(props) => props.theme.breakPoints.small}) {
    display: none;
  }
`;

const Backdrop = styled.div`
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Logo = styled.img`
  margin-bottom: 1rem;
`;

export const Navbar = () => {
  const [navState, toggleNavState] = useState(false);

  let NavItems;

  NavItems = (
    <>
      <NavItem to="/">OVER ONS</NavItem>
      <NavItem to="/events">AGENDA</NavItem>
    </>
  );

  return (
    <>
      <StyledNav>
        <div>
          <Logo alt="logo" src={logo} className="logo" />
          <NavItemWrapper className={navState ? "open" : undefined}>
            {NavItems}
            <MobileNavBtn absolute onClick={() => toggleNavState(!navState)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path
                  fill="currentColor"
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                />
              </svg>
            </MobileNavBtn>
          </NavItemWrapper>
          <MobileNavBtn onClick={() => toggleNavState(!navState)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </MobileNavBtn>
          {navState ? <Backdrop /> : undefined}
        </div>
      </StyledNav>
    </>
  );
};

export default Navbar;
