import Search from "../Search";
import Sidebar from "../Sidebar";
import Trends from "../Trends";
import Feed from "../Feed";
import {
  MainContainer,
  RightContainer,
  MainContent,
  LeftContainer,
} from "./styles";

const Main = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <Sidebar />
      </LeftContainer>
      <MainContent>
        <Feed />
      </MainContent>
      <RightContainer>
        <Search />
        <Trends />
      </RightContainer>
    </MainContainer>
  );
};

export default Main;
