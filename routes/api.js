var express = require('express');
var router = express.Router();

// Require controller modules
var awardsController = require('../controllers/awardsController');
var conferencesController = require('../controllers/conferencesController');
var contactController = require('../controllers/contactController');
var coursesController = require('../controllers/coursesController');
var educationController = require('../controllers/educationController');
var publicationsController = require('../controllers/publicationsController');
var researchInterestsController = require('../controllers/researchInterestsController');
var specialtiesController = require('../controllers/specialtiesController');
var studentEvaluationsController = require('../controllers/studentEvaluationsController');
var teachingInterestsController = require('../controllers/teachingInterestsController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/awards', awardsController.list);
router.get('/conferences', conferencesController.list);
router.get('/contact', contactController.list);
router.get('/courses', coursesController.list);
router.get('/education', educationController.list);
router.get('/publications', publicationsController.list);
router.get('/researchInterests', researchInterestsController.list);
router.get('/specialties', specialtiesController.list);
router.get('/conferences', conferencesController.list);
router.get('/studentEvaluations', studentEvaluationsController.list);
router.get('/teachingInterests', teachingInterestsController.list);

module.exports = router;
