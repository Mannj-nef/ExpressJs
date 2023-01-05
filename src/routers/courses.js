import Router from "express";
import CourseController from "../app/controllers/CourseController.js";

const router = Router();

// [GET] /course
router.get("/", CourseController.index);
router.get("/:id", CourseController.getCourseById);

// [POST] /course
router.post("/", CourseController.createCourse);

// [PUT] /course/:id
router.put("/:id", CourseController.updateCourse);

// [DELETE] /course/:id
router.delete("/:id", CourseController.deleteCourse);

export default router;
