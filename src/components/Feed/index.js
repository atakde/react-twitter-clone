import { ReactComponent as LatestIcon } from "../../assets/latest-icon.svg";
import { ReactComponent as ImageIcon } from "../../assets/image-icon.svg";
import { ReactComponent as GifIcon } from "../../assets/gif-icon.svg";
import { ReactComponent as QuestionnaireIcon } from "../../assets/questionnaire-icon.svg";
import { ReactComponent as EmojiIcon } from "../../assets/emoji-icon.svg";
import { FeedContainer, TweetContainer } from "./styles";
import Post from "../Post";

const Feed = () => {
  return (
    <FeedContainer>
      <div className="header">
        <span>Latest Tweets</span>
        <span>
          <LatestIcon />
        </span>
      </div>
      <TweetContainer>
        <div className="tweet-content">
          <div>
            <img
              src="https://doodleipsum.com/200x200/avatar-4?bg=3D27F6&i=4c13721e99bcef1f9e61ac2af5b94936"
              alt=""
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <div className="tweet-buttons">
            <ImageIcon />
            <GifIcon />
            <QuestionnaireIcon />
            <EmojiIcon />
            <div className="tweet-button">
              <button className="button">Tweet</button>
            </div>
          </div>
        </div>
      </TweetContainer>
      <div>
        <Post
          profileData={{
            fullName: "John Doe",
            username: "johndoe",
            avatar:
              "https://doodleipsum.com/200x200/avatar-4?bg=3D27F6&i=4c13721e99bcef1f9e61ac2af5b94936",
          }}
          tweetData={{
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image:
              "https://doodleipsum.com/700?i=f9b600d9d2fd687422cee8090c384c28",
          }}
        />

        <Post
          profileData={{
            fullName: "John Doe",
            username: "johndoe",
            avatar:
              "https://doodleipsum.com/200x200/avatar-4?bg=3D27F6&i=4c13721e99bcef1f9e61ac2af5b94936",
          }}
          tweetData={{
            text: "lorem test ipsum",
            image:
              "https://doodleipsum.com/700?i=f9b600d9d2fd687422cee8090c384c28",
          }}
        />

        <Post
          profileData={{
            fullName: "John Doe",
            username: "johndoe",
            avatar:
              "https://doodleipsum.com/200x200/avatar-4?bg=3D27F6&i=4c13721e99bcef1f9e61ac2af5b94936",
          }}
          tweetData={{
            text: "lorem test ipsum",
            image:
              "https://doodleipsum.com/700?i=f9b600d9d2fd687422cee8090c384c28",
          }}
        />
      </div>
    </FeedContainer>
  );
};

export default Feed;
