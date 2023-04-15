import { Container } from "../components/Container";
import { Navbar } from "../components/Navbar";

import styled from "styled-components";
import React from "react";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 2;
  background-color: #8ca098;
  height: 100px;
`;

export const ExtendedHeader = styled.div`
  flex-direction: column;
  display: flex;
  position: sticky;
  width: 100%;

  top: 0;
  z-index: 2;
  background-color: #fff;
  height: 105px;
`;

const Header = ({ ...props }) => {
  return (
    <ExtendedHeader>
      <Container>
        <Navbar />
      </Container>
      <StyledHeader />
    </ExtendedHeader>
  );
};

export { Header };
