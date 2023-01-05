import bcrypt from "bcrypt";
import User from "../models/UsersModal.js";
import UsersServices from "../services/UsersServices.js";

class UsersController {
  // [GET] /api/v1/users
  async index(req, res) {
    try {
      const query = req.query;
      const data = await UsersServices.getAllUsers(query);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [GET] /api/v1/users/login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      const validatePassword = bcrypt.compareSync(password, user.password);

      if (!user) {
        return res.status(404).json("User do not exist");
      }
      if (!validatePassword) {
        return res.status(404).json("wrong password");
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [POST] /api/v1/users/register
  async register(req, res) {
    try {
      const data = req.body;
      const result = await UsersServices.register(data);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [PUT] /api/v1/users/:id
  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      await UsersServices.updateUser(id, data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  // [DELETE] /api/v1/users/:id
  async delete(req, res) {
    try {
      const id = req.params.id;
      const data = await UsersServices.deleteUser(id);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new UsersController();
