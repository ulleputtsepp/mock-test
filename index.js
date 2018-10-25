//ECHO is on.
    var request = require('superagent');

var getUserFollowers = function(username, callback) {
    request
        .get(`https://api.github.com/users/${username}/followers`)
        .end(function(err, res) {
            if (!err) {
               // console.log(res.body)
                var users = res.body.map(function(user) {
                    return user.login;
                });
                callback(null, users);
            } else {
                callback('Error Occurred!');
            }
        });
};

module.exports.getUserFollowers = getUserFollowers;