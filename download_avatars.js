var request = require('request');
require('dotenv').config();

//console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    qs: {
    sort: 'created',
    direction: 'desc',
    access_token: process.env.GITHUB_TOKEN
  },
    headers: {
      'User-Agent': 'GitHub Avatar Downloader'
    }
  };

  request(options, function(err, res, body) {
    cb(err, body);
  });
}



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

/*

var request = require('request');

request({
  url: `https://api.github.com/users/sircmpwn`,
  headers: {
    'user-agent': 'node application'
  }
}, function (error, response, body) {

  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var drew = JSON.parse(body)

  console.log(drew.name)
});

*/