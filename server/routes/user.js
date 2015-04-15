
/*
 * GET users listing.
 */

var friends = require('../data/friends.json');
var phones = require('../data/phones.json');

exports.friends = function (req, res) {
    res.send(friends);
};

exports.phones = function (req, res) {
    res.send(phones);
};
exports.phone = function (req, res) {
    var phoneId = req.params.phoneId;

    res.send(require('../data/phones/' + phoneId + '.json'));
};
