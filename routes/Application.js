const express = require('express');
const { isAuthenticated } = require('../middleware/auth');
const { employeeGetAllApplication, jobSeekerGetAllApplication, jobSeekerDeleteApplication, postApplication } = require('../controllers/applicationController');
const router = express.Router();
router.route("/employeeapplications").get(isAuthenticated, employeeGetAllApplication);
router.route('/jobseekerapplications').get(isAuthenticated, jobSeekerGetAllApplication);
router.route('/jobseekerdeleteapplication/:id').delete(isAuthenticated,jobSeekerDeleteApplication)
router.route('/postapplication').post(isAuthenticated,postApplication)
router.route('/deleteapplication/:id').delete(isAuthenticated, jobSeekerDeleteApplication);
module.exports = router;