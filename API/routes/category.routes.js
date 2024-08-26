import express from 'express';
const router = express.Router();

import * as categorycontroller  from '../controller/category.controller.js';

router.post("/save",categorycontroller.save);
router.get("/fetch",categorycontroller.fetch);
// router.delete("/delete",admincontroller.deletestudent)
// router.patch("/update",admincontroller.updatestudent);
export default router;