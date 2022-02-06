import styled from "styled-components";

export const SidebarContainer = styled.div`
  max-width: 275px;
  width: 100%;
  height: 100%;
  font-size: 19px;
  font-weight: bold;
  line-height: 23px;
  height: 100%;
`;

export const Navbar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  .navbar-item {
    display: flex;
    justify-content: flex-start;
    padding: 11px 19px;
    gap: 16px;
    cursor: pointer;

    .navbar-item-icon {
        font-size: 24px;
    }

    & > button {
      border: none;
      background: #1da1f2;
      border-radius: 50px;
      color: white;
      padding: 15px 80px;
      font-size: 15px;
      line-height: 18px;
      font-weight: bold;
      width: 210px;
    }

    &.profile {
      margin-top: auto;
      align-items: center;

      .profile-info {
        display: flex;
        flex-direction: column;
        font-size 14px;

        .username {
          font-weight: normal;
          color: #6E767D;
        }
      }

      img {
        border-radius: 40px;
      }

      @media only screen and (max-width: 1298px) {
        .profile-info {
          display: none;
        }
      }
    }

    &:hover {
      background: rgba(29, 161, 242, 0.2);
      border-radius: 53px;
      transition: all 0.2s ease-in-out;
    }

    &.active {
      background: rgba(29, 161, 242, 0.2);
      border-radius: 53px;
    }

    @media only screen and (max-width: 1298px) {
      width: 90px;
      justify-content: center;

      .navbar-item {
        margin: 10px 0;
        padding: 0;
      }

      .navbar-item-text, button {
        display: none;
      }
    }
  }
`;
