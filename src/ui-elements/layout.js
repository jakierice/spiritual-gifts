import styled from 'styled-components';

export const HeaderFooterWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: max-content auto max-content;
  min-height: 100vh;
`;

export const Header = styled.div`
  padding: 2rem 1rem 1rem;
`;

export const Page = styled.div`
  padding: 1rem;
`;

export const Footer = styled.div`
  padding: 1rem;
  text-align: center;
  opacity: 0.3;
`;
