import express from "express";
import authRoute from "./modules/auth/auth_route";
import admissionRoute from "./modules/admission/admission_route";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/admission",admissionRoute)


export default router;