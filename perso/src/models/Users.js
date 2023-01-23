import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  phoneNumber: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  admin: {
    required: true,
    type: Boolean,
    default: 0,
  },
});

const UsersModel = mongoose.model("Users", usersSchema);

export default UsersModel;
