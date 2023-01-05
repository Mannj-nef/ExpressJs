import CourseServises from "../services/CourseServices.js";

class CourseController {
  // [GET] /api/v1/courses
  async index(req, res) {
    try {
      const query = req.query;
      const data = await CourseServises.getCourse(query);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /api/v1/courses/:id
  async getCourseById(req, res) {
    try {
      const id = req.params.id;
      const data = await CourseServises.getOneCourse(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] /api/v1/courses
  async createCourse(req, res) {
    try {
      const data = await CourseServises.createCourse(req.body);
      res.status(200).json({ messaga: "create success ", data });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /api/v1/courses/:id
  async updateCourse(req, res) {
    const id = req.params.id;
    try {
      const data = await CourseServises.updataCourse(id, req.body);
      res.status(200).json({ messaga: "update success ", data });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] /api/v1/courses/:id
  async deleteCourse(req, res) {
    try {
      const id = req.params.id;
      const data = await CourseServises.deleteCoutse(id);
      res.status(200).json({ messaga: "delete success ", data });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CourseController();
