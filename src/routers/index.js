import coursesRouter from "./courses.js";
import usersRouter from "./users.js";

function useRouter(app) {
  // coutses
  app.use("/api/v1/courses", coursesRouter);

  // users
  app.use("/api/v1/users", usersRouter);

  app.get("*", (req, res) => {
    res.status(404).json("Not fount");
  });
}

export default { useRouter };
