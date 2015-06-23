var request = require("request");

module.exports = function (str) {
  request(str, function(error, response, body) {
    var json = JSON.parse(body);
    console.log(json.content);
  });
}
