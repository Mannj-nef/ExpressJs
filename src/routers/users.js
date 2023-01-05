import Router from "express";
import UsersController from "../app/controllers/UsersController.js";

const router = Router();

// [GET] /users
router.get("/", UsersController.index);
router.get("/login", UsersController.login);

// [POST] /users
router.post("/register", UsersController.register);

// [PUT] /users
router.put("/:id", UsersController.update);

// [DELETE] /users
router.delete("/:id", UsersController.delete);

export default router;
