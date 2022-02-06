import { MdOutlineSearch } from "react-icons/md";
import { SearchContainer, SearchInput } from "./styles";

const Search = () => {
  return (
    <SearchContainer>
      <MdOutlineSearch size={20} color="#6E767D" />
      <SearchInput type="text" placeholder="Search Twitter" />
    </SearchContainer>
  );
};

export default Search;
