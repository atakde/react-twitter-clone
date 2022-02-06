import { SidebarContainer, Navbar } from "./styles";
import {
  MdOutlineHome,
  MdOutlineTag,
  MdOutlineNotifications,
  MdOutlineMail,
  MdOutlineBookmarkBorder,
  MdOutlineListAlt,
  MdPersonOutline,
  MdOutlineMore,
} from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Navbar>
        <SidebarItem Icon={FaTwitter} text="" />
        <SidebarItem Icon={MdOutlineHome} text="Home" />
        <SidebarItem Icon={MdOutlineTag} text="Explore" />
        <SidebarItem Icon={MdOutlineNotifications} text="Notifications" />
        <SidebarItem Icon={MdOutlineMail} text="Messages" />
        <SidebarItem Icon={MdOutlineBookmarkBorder} text="Bookmarks" />
        <SidebarItem Icon={MdOutlineListAlt} text="Lists" />
        <SidebarItem Icon={MdPersonOutline} text="Profile" />
        <SidebarItem Icon={MdOutlineMore} text="More" />
        <div className="navbar-item">
          <button>Tweet</button>
        </div>
        <div className="navbar-item profile">
          <div className="profile-image">
            <img
              src="https://doodleipsum.com/40x40/avatar-4?bg=3D27F6&i=4c13721e99bcef1f9e61ac2af5b94936"
              alt=""
            />
          </div>
          <div className="profile-info">
            <span className="name">Atakan Demircioğlu</span>
            <span className="username">@atakde</span>
          </div>
        </div>
      </Navbar>
    </SidebarContainer>
  );
};

export default Sidebar;
