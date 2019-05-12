import styled from 'styled-components';
import { Link } from 'react-router-dom';

import colors from './colors';

const InternalLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  margin-left: 0.8rem;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
const HeaderLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.6rem;
`;

export { InternalLink, HeaderLink };