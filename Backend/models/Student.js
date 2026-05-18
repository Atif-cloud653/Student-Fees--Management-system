const mongoose = require("mongoose");

const feeSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  fine: Number,
  paid: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  className: String,
  studentId: String,
  password: String,
  fees: [feeSchema]
});

module.exports = mongoose.model("Student", studentSchema);