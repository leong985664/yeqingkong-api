// Return a list of all the publications
exports.list = function(req, res) {
    var data = require('../data/publications.json');
    res.json(data);
};
