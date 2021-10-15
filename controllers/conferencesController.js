// Return a list of all the conference experiences
exports.list = function(req, res) {
    var data = require('../data/conferences.json');
    res.json(data);
};
