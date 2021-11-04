import styled from 'styled-components';
import ui from '../helpers/ui.json';

const { colorSchemma } = ui;

export const Site = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${colorSchemma.colorPrimary};
  color: #d0d0d0;
`;

export const Delimiters = styled.div`
  width: 80%;
  margin: 0 auto;
`;
