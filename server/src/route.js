import express from "express";
import authRoute from "./modules/auth/auth_route";
import admissionRoute from "./modules/admission/admission_route";
import attendenceRoute from "./modules/attendence/attendence.route"

const router = express.Router();

router.use("/auth", authRoute);
router.use("/admission",admissionRoute)
router.use('/attendence',attendenceRoute)


export default router;