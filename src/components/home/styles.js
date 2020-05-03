import styled from 'styled-components';
import { Cutout, Window } from 'react95';

export const StyledWindow = styled(Window)`
  margin: auto;
  width: 650px;
  
  @media (max-width: 675px) {
    width: unset;
    margin 3rem 1rem 1rem 1rem;
  }
`;

export const ProfilePicWrapper = styled.div`
  margin: auto 1rem auto auto;
  min-width: 200px;

  @media (max-width: 675px) {
    margin: auto auto 1rem auto;
  }
`;

export const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 675px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const StyledCutout = styled(Cutout)`
  background-color: white;
  padding: 12px;
`;

export const CutoutText = styled.p`
  margin: 8px 0px;
`;
