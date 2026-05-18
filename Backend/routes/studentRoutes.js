const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/login", async (req, res) => {

  const { studentId, password } = req.body;

  const student = await Student.findOne({
    studentId,
    password
  });

  res.json(student);
});

router.post("/pay/:studentId/:feeId", async (req, res) => {

  const student = await Student.findById(req.params.studentId);

  const fee = student.fees.id(req.params.feeId);

  fee.paid = true;

  await student.save();

  res.json({ message: "Payment Successful" });
});

module.exports = router;