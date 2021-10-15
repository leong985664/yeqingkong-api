// Return a list of all the teaching interests
exports.list = function(req, res) {
    var data = require('../data/teachingInterests.json');
    res.json(data);
};
