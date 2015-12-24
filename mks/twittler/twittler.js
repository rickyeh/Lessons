console.log(streams.home);

function insertTweet(tweet) {
  var $tweet = $('<div class="tweet border white"><img src="twitter.png" class="avatars"><span class="userName"></span> <span class="date"></span><p></p></div>');
  $tweet.find('.userName').on('click', function() { changeUser(tweet.user); });
  $tweet.find('.userName').text('@' + tweet.user);
  $tweet.find('.date').text('' + tweet.created_at);
  $tweet.find('p').text(tweet.message);
  $tweet.appendTo($('#newsFeed'));
}

// on clicking a username, page will refresh only showing user's tweets and update user info
function changeUser(user) {
  console.log('Changing user to ' + user);
  $('.profilePic').attr('src', 'twitterW.png');
  $('#name').text('@' + user);
  $('#numOfTweets').find('p').text(streams.users[user].length);
  $('#numOfFollowing').find('p').text(Math.floor(Math.random() * 100));
  $('#numOfFollowers').find('p').text(Math.floor(Math.random() * 100));
  displayUserTweets(user);
}

function displayUserTweets(user) {
  $('#newsFeed').html('');

  var index = streams.home.length - 1;

  while (index >= 0) {
    var tweet = streams.home[index];
    if (tweet.user === user) {
      insertTweet(tweet);
    }
    index -= 1;
  }
}

function displayAllTweets() {
  $('#newsFeed').html('');

  var index = streams.home.length - 1;

  while (index >= 0) {
    var tweet = streams.home[index];
    console.log(tweet);
    insertTweet(tweet);
    index -= 1;
  }
}

$(document).ready(function() {
  displayAllTweets();
  $('#homeButton').on('click', function() {
    location.reload();
  });
});
