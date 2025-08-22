import express from 'express';
const router = express.Router();
import {
  getAllUserApplicationsCount,
  getAllUserRejectedApplicationsCount,
  getAllUserNoResponseApplicationsCount,
  getAllUserSuccessRate
} from "../controllers/analytics.Controller.js";
router.get('/all-user-applications', getAllUserApplicationsCount);
router.get('/all-user-rejected-applications', getAllUserRejectedApplicationsCount);
router.get('/all-user-no-response-applications', getAllUserNoResponseApplicationsCount);
router.get('/all-user-success-rate', getAllUserSuccessRate);

export default router;