import styled from 'styled-components';
import { rem } from 'polished';
import colors from './colors';

export const Button = styled.button`
  background-color: ${colors.blue};
  border: ${rem(1)} solid ${colors.blue};
  color: ${colors.white};
  font-size: ${rem(16)};
  padding: ${rem(8)} ${rem(16)};
`;
