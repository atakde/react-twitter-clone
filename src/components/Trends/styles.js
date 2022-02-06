import styled from "styled-components";

export const TrendsContainer = styled.div`
  background: #15181c;
  border: 1px solid #15181c;
  border-radius: 14px;
  padding: 15px 0;

  .trends-header {
    font-size: 19px;
    font-weight: bold;
    line-height: 23px;
    border-bottom: 1px solid #2f3336;
    padding: 0 15px 15px;
  }
  .trends-body {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-size: 15px;
    line-height: 18px;

    .trend {
      padding: 8px 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-bottom: 1px solid #2f3336;
    }

    .trending {
      color: #6e767d;
      font-size: 13px;
    }

    .tweet-count {
      color: #6e767d;
      font-size: 15px;
    }
  }

  .trends-footer {
    padding: 0 16px;
    a {
      color: #1da1f2;
      text-decoration: none;
    }
  }
`;
