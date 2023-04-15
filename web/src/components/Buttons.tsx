import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  min-width: 15rem;
`;

export const ButtonDefault = styled.button`
  justify-content: center;
  -ms-align-items: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 1rem;
  color: #fff;

  border-radius: 0.25rem;
  border: none;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.red};

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.redDark};
  }
  &:focus {
    outline: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakPoints.medium}) {
    padding: 1rem 3rem;
  }
`;

export const ButtonSecondary = styled(ButtonDefault)`
  background-color: transparent !important;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid currentColor;

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }
`;

export const Button = styled.button`
  display: block;
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  background-color: #a5bfb2;
  color: #000000;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-weight: bold;
  margin-top: 10px;
`;

export default ButtonContainer;
