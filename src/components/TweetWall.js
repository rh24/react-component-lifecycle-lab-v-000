import React from 'react';
import Tweet from './Tweet';
// how can I inspect what the props of my components are?
class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.newTweets.length > 0;
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
