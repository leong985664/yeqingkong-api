// Return a list of all the research interests
exports.list = function(req, res) {
    var data = require('../data/researchInterests.json');
    res.json(data);
};
