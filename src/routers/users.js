import Router from "express";
import UsersController from "../app/controllers/UsersController.js";
import middlewareAuthen from "../app/middlewares/authenticate.js";
import middlewareAuthor from "../app/middlewares/authorization.js";

const router = Router();

// [GET] /api/v1/users
router.get(
  "/",
  middlewareAuthen.verifyTokenAuthen,
  UsersController.getAllUsers
);

// [GET] /api/v1/users/login
router.get("/login", UsersController.login);

// [PUT] /api/v1/users/:id
router.put("/:id", UsersController.update);
// router.put("/:id", middlewareAuthor.verifyTokenAuthor, UsersController.update);

export default router;
