const Tweet = require('../database/models/tweet.model');

exports.getTweets = () => {
    return Tweet.find({}).exec();
}

exports.createTweet = (tweet) => {
    const newTweet = new Tweet(tweet);
    return newTweet.save();
}

exports.deleteTweet = (tweetid) =>{
    return Tweet.findByIdAndDelete(tweetid).exec();
}

exports.getTweet = (tweetId) => {
    return Tweet.findOne({_id : tweetId}).exec();
}

exports.updateTweet = (tweetId,tweet) =>{
    return Tweet.findByIdAndUpdate(tweetId,{ $set:tweet } , {runValidators:true})
}