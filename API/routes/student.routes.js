import express from 'express';
const router = express.Router();

import * as studentcontroller  from '../controller/student.controller.js';

router.post("/save",studentcontroller.save);
router.post("/login",studentcontroller.login);
router.get("/fetch",studentcontroller.fetch);
router.patch("/update",studentcontroller.updatestudentdetails);

export default router;