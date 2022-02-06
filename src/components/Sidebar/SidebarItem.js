const SidebarItem = ({ Icon, text }) => {
  return (
    <div className="navbar-item">
      <div className="navbar-item-icon">{<Icon />}</div>
      <div className="navbar-item-text">{text}</div>
    </div>
  );
};

export default SidebarItem;
