import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { baseButtonStyles } from './buttons';
import colors from './colors';

export const InternalLink = styled(Link)`
  color: ${colors.blue};
  text-decoration: none;
  margin-left: 0.8rem;

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
export const HeaderLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  font-size: 1.6rem;
`;

export const ButtonLink = styled(Link)`
  ${baseButtonStyles}
`;
