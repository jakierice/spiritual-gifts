import styled from 'styled-components';
import { rem } from 'polished';
import colors from './colors';

const inputPadding = `${rem(12)} ${rem(16)} ${rem(8)}`;

export const FormRow = styled.div`
  display: block;
  margin: 0 0 1rem;
  position: relative;
`;

export const FormLabel = styled.label`
  display: block;
  position: absolute;
  left: ${rem(16)};
  top: ${rem(-8)};
  font-size: ${rem(12)};
  background-color: white;
`;

export const TextInput = styled.input`
  padding: ${inputPadding};
  border-radius: ${rem(3)};
  font-size: ${rem(16)};
  border: ${rem(1)} solid ${colors.lightGray};
  margin: 0 0 1rem;
`;

export const TextArea = styled.textarea`
  padding: ${inputPadding};
  border-radius: ${rem(3)};
  font-size: ${rem(16)};
  border: ${rem(1)} solid ${colors.lightGray};
  margin: 0 0 1rem;
`;

export const Select = styled.select`
  background: transparent;
  border-radius: ${rem(3)};
  padding: ${inputPadding};
  border: ${rem(1)} solid ${colors.lightGray};
  font-size: ${rem(16)};
`;
