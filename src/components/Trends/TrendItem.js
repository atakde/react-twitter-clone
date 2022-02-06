const TrendItem = ({ trendingText, hashTag, tweetCount }) => {
  return (
    <div className="trend">
      <span className="trending">{trendingText}</span>
      <span>{hashTag}</span>
      <span className="tweet-count">{tweetCount} Tweets</span>
    </div>
  );
};

export default TrendItem;
