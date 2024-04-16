const express = require('express');
const { getAllJobs, postJob, getMyJobs, updateJob, getSingleJob, deleteJob } = require('../controllers/jobController');
const { isAuthenticated } = require('../middleware/auth');


const router = express.Router();
router.route('/alljobs').get(getAllJobs)
router.route('/myjobs').get(isAuthenticated, getMyJobs);
router.route('/postjob').post(isAuthenticated, postJob)
router.route('/update/:id').put(isAuthenticated,updateJob)
router.route('/:id').get(isAuthenticated,getSingleJob).delete(isAuthenticated,deleteJob)
module.exports = router