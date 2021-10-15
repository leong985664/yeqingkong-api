// Return a list of all the education experiences
exports.list = function(req, res) {
    var data = require('../data/education.json');
    res.json(data);
};
