const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number },
  about: { type: String },
  social: { type: Map, of: String },
  linkedIn: { type: String },
  github: { type: String },
  facebook: { type: String },
  twitter: { type: String },
  instagram: { type: String },
  website: { type: String },
  education: { type: String },
  intrests: { type: [] },
  work: { type: String },
  pic: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
