import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 24px 12px;
  font-size: 15px;
  line-height: 18px;
  border-bottom: 1px solid #2f3336;

  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 47px;
  }

  .item-content {
    width: 100%;
    padding: 0 10px;

    .item-content-header {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: bold;

      & > small {
        color: #6e767d;
        font-weight: normal;
      }
    }

    .item-content-body {
      margin: 5px 0;

      img {
        width: 100%;
      }
    }
  }
`;
