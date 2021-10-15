// Return a list of all the specialties experiences
exports.list = function(req, res) {
    var data = require('../data/specialties.json');
    res.json(data);
};
