// Return a list of all the courses
exports.list = function(req, res) {
    var data = require('../data/courses.json');
    res.json(data);
};
