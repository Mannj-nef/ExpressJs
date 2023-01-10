import { Message } from "../../configs/constant/message.js";
import User from "../models/UsersModal.js";
import {
  handleHashComparePassword,
  handleHashPassword,
} from "../utils/handleHashPassword.js";
import handlePafination from "../utils/handlePagination.js";
import jwtUtils from "../utils/jwtUtils.js";

class UsersController {
  // [GET] /api/v1/users
  async getAllUsers(req, res) {
    try {
      const query = req.query;
      const users = await handlePafination(User, query);
      res.status(200).json({
        statusMessage: Message.SUCCESSFUL,
        users,
      });
    } catch (error) {
      res.status(500).json({
        statusMessage: Message.SERVER_ERROR,
        error,
      });
    }
  }

  // [GET] /api/v1/users/login
  async login(req, res) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res.status(400).json({
          statusMessage: Message.BAD_REQUEST,
        });
        return;
      }

      const user = await User.findOne({ email });
      const exactPassword = handleHashComparePassword(password, user.password);
      if (!user) {
        res.status(400).json({
          statusMessage: Message.USER_NOT_FOUND,
        });
        return;
      }
      if (!exactPassword) {
        res.status(400).json({
          statusMessage: Message.PASSWORD_WRONG,
        });
        return;
      }
      if (user && exactPassword) {
        const newUser = { ...user._doc };
        const { _id, role } = newUser;
        delete newUser.password;
        const dataToken = {
          id: _id,
          role,
        };

        const token = jwtUtils.accessToken(dataToken);
        const refreshToken = jwtUtils.refreshToken(dataToken);

        res.status(200).json({
          statusMessage: Message.SUCCESSFUL,
          newUser,
          token,
          refreshToken,
        });
      }
    } catch (error) {
      res.status(500).json({
        statusMessage: Message.SERVER_ERROR,
        error,
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;

      const newUser = await handleHashPassword(data);
      await User.findByIdAndUpdate(id, newUser);
      delete newUser.password;

      res.status(200).json({
        statusMessage: Message.UPDATE_SUCCESSFUL,
        newUser,
      });
    } catch (error) {
      res.status(500).json({
        statusMessage: Message.SERVER_ERROR,
        error,
      });
    }
  }
}

export default new UsersController();
