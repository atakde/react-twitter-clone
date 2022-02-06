import styled from "styled-components";

export const RightContainer = styled.div`
  min-width: 320px;
  margin: 24px 30px;

  @media only screen and (max-width: 998px) {
    display: none;
  }
`;

export const LeftContainer = styled.div`
  border-right: 1px solid #2f3336;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  margin: auto;
  background: #000000;
  color: white;
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto scroll;
  border-right: 1px solid #2f3336;
  &::-webkit-scrollbar {
    display: none;
  }
`;
