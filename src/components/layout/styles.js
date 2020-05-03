import bg from '../../images/bg.gif'
import styled from 'styled-components';

export const LayoutContainer = styled.div`
  min-height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

export const LayoutContent = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
