import User from "../models/UsersModal.js";
import handlePafination from "../utils/handlePagination.js";
import handleHashPassword from "../utils/handleHashPassword.js";

class UsersServices {
  // [GET] /api/v1/users
  getAllUsers(query) {
    return handlePafination(User, query);
  }

  // [POST] /api/v1/users
  register(data) {
    const user = handleHashPassword(data);
    return User.create(user);
  }

  // [PUT] /api/v1/users/:id
  updateUser(id, data) {
    const user = handleHashPassword(data);
    return User.findByIdAndUpdate(id, user);
  }

  // [DELETE] /api/v1/users/:id
  deleteUser(id) {
    return User.findByIdAndRemove(id);
  }
}

export default new UsersServices();
