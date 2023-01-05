import Course from "../models/CourseModal.js";
import handlePafination from "../utils/handlePagination.js";

class CourseServises {
  getCourse(query) {
    const data = handlePafination(Course, query);
    return data;
  }
  getOneCourse(id) {
    return Course.findById(id);
  }
  createCourse(data) {
    return Course.create(data);
  }
  updataCourse(id, data) {
    return Course.findByIdAndUpdate(id, data);
  }
  deleteCoutse(id) {
    return Course.findByIdAndDelete(id);
  }
}

export default new CourseServises();
