import mongoose from "mongoose";

const Schema = mongoose.Schema;
mongoose.set("strictQuery", false);

const Course = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    slug: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const CourseModel = mongoose.model("Course", Course);

export default CourseModel;
