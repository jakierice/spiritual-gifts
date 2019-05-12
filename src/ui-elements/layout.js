import styled from 'styled-components';
import { rem } from 'polished';
import colors from './colors';
import mediaQueries from './mediaQueries';

export const HeaderFooterWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  grid-template-rows: max-content auto max-content;
`;

export const Header = styled.div`
  padding: 2rem 1rem 1rem;
  border-bottom: ${rem(1)} solid ${colors.lightGray};
`;

export const Page = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: auto;
`;

export const Footer = styled.div`
  padding: 1rem;
  text-align: center;
  opacity: 0.3;
`;

export const RightSidebar = styled.div`
  grid-column: span 2;

  @media (max-width: ${mediaQueries.md}) {
    grid-column: span 8;
  }
`;

export const MainContent = styled.div`
  grid-column: span 6;
`;

export const MainContentFullWidth = styled.div`
  grid-column: span 8;

  @media (max-width: ${mediaQueries.md}) {
    grid-column: span 8;
  }
`;

export const ShowOnMobile = styled.div`
  display: none;

  @media (max-width: ${mediaQueries.md}) {
    display: block;
  }
`;
