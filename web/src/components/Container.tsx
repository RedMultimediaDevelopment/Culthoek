import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 100rem;
  width: 100%;
  height: 100%;
  display: inherit;
  flex-wrap: inherit;
  flex-direction: inherit;
  align-items: inherit;
  justify-content: inherit;
`;

export const ContentBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  flex-direction: row;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  padding-left: ${({ theme }) => theme.spacing.large};
  padding-right: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.small};
  padding-bottom: ${({ theme }) => theme.spacing.large};
  width: 80%;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radius.small};
  z-index: 2;
  margin-bottom: 5rem;
`;
