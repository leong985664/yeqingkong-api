// Return a list of all the awards
exports.list = function(req, res) {
    var data = require('../data/awards.json');
    res.json(data);
};
