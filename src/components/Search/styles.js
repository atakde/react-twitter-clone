import styled from "styled-components";

export const SearchContainer = styled.div`
  background: #15181c;
  padding: 12px;
  border: 1px solid #202327;
  border-radius: 40px;
  margin: 24px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1298px) {
    display: none;
  }
`;

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-size: 19px;
  line-height: 23px;
  margin-left: 10px;

  @media only screen and (max-width: 1298px) {
    display: none;
  }
`;
