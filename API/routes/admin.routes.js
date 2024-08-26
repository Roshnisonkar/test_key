import express from 'express';
const router = express.Router();

import * as admincontroller  from '../controller/admin.controller.js';

router.post("/save",admincontroller.save);
router.get("/fetch",admincontroller.fetch);
router.delete("/delete",admincontroller.deletestudent)
router.patch("/update",admincontroller.updatestudent);
export default router;