const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please inseart name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please enter a valid mail"],
  },
  password: {
    type: String,
    required: [true, "password is require"],
  },
  passwordConfim: {
    type: String,
    required: [true, "password is require"],
    validate: {
      validator: function (el) {
        return this.password === el;
      },
      message: "passwords are not the same",
    },
  },
  size: {
    type: Number,
    default: 0,
  },
  fields: {
    type: [String],
    required: [true, "comapny filed is a must"],
  },

  // add dataType of employees
});

const Company = mongoose.model("Company", companySchema);
module.exports = Company;
