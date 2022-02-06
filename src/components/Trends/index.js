import { TrendsContainer } from "./styles";
import TrendItem from "./TrendItem";

const Trends = () => {
  return (
    <TrendsContainer>
      <div className="trends-header">
        <span>Trends for you</span>
      </div>
      <div className="trends-body">
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
        <TrendItem
          trendingText="#javascript"
          hashTag="#javascript"
          tweetCount="1.2k"
        />
      </div>
      <div className="trends-footer">
        <a href="#">See more</a>
      </div>
    </TrendsContainer>
  );
};

export default Trends;
