import styled from 'styled-components';
import { Cutout, Window } from 'react95';

export const StyledWindow = styled(Window)`
  margin: auto;
  width: 650px;
`;

export const ProfilePicWrapper = styled.div`
  min-width: 200px;
  min-height: 200px;
  margin-right: 1rem;
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCutout = styled(Cutout)`
  background-color: white;
  padding: 12px;
`;

export const CutoutText = styled.p`
  margin: 8px 0px;
`;
