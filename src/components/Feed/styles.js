import styled from "styled-components";

export const FeedContainer = styled.div`
  .header {
    padding: 15px;
    border-bottom: 1px solid #2f3336;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TweetContainer = styled.div`
  display: flex;
  padding: 10px 15px;
  border-bottom: 10px solid #2f3336;

  img {
    width: 40px;
    border-radius: 47px;
  }

  .tweet-content {
    width: 100%;
    color: #6e767d;

    & > div {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .tweet-buttons {
      margin: 18px auto 18px 58px;
    }

    .tweet-button {
      margin-left: auto;

      button {
        background: #1da1f2;
        color: white;
        border-radius: 47px;
        border: none;
        padding: 12px 24px;
      }
    }

    input {
      width: 100%;
      background: transparent;
      height: 100%;
      border: none;
      margin-left: 12px;
      font-size: 19px;
    }
  }
`;
