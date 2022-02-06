import { PostContainer } from "./styles";

const Post = ({ profileData, tweetData }) => {
  return (
    <PostContainer>
      <img className="avatar" src={profileData.avatar}></img>
      <div className="item-content">
        <div className="item-content-header">
          <span>{profileData.fullName}</span>
          <small>@{profileData.username}</small>
          <small>1h</small>
        </div>
        <div className="item-content-body">
          <p>{tweetData.text}</p>
          <img src={tweetData.image}></img>
        </div>
        <div className="item-content-footer"></div>
      </div>
    </PostContainer>
  );
};

export default Post;
