// Return a list of all the student evaluations
exports.list = function(req, res) {
    var data = require('../data/studentEvaluations.json');
    res.json(data);
};
