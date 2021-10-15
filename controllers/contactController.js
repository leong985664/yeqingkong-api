// Return a list of all the contact
exports.list = function(req, res) {
    var data = require('../data/contact.json');
    res.json(data);
};
