import mongoose from "mongoose";
import { GENDER as gender, ROLE as role } from "../../enums/constant.js";

const Schema = mongoose.Schema;

mongoose.set("strictQuery", false);

const User = new Schema(
  {
    userName: { type: String, require: true },
    fullName: { type: String },
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    address: { type: String },
    birthday: { type: String },
    avatarURL: { type: String },
    gender: { type: String, enum: [gender.FEMALE, gender.MALE], require: true },
    role: { type: String, enum: [role.ADMIN, role.USER], require: true },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", User);

export default UserModel;
