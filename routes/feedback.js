import { createAdmin, createStudent, createTeacher, getAllUsers } from "../controller/userController.js";
import { createSubject, getSubject } from "../controller/subjectController.js";
import { createPractical, getAllPractical } from "../controller/practicalController.js";
// import { EnrollPractical } from "../controller/enrollController.js";
import { isAdmin, isTeacher } from "../middleware/middleware.js";
import express from "express";


const router = express.Router();


router.post("/admin/create",createAdmin)
router.post("/teacher/create",createTeacher)
router.post("/student/create",createStudent)
router.post("/subject/create",isAdmin,createSubject)
router.post("/practical/create",isTeacher,createPractical)
// router.post("/enroll/add",EnrollPractical)

router.get("/user/get",getAllUsers)
router.get("/subject/get",getSubject)
router.get("/practical/get",getAllPractical)

export default router;
