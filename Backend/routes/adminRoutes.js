const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/create-student", async (req, res) => {

  const student = await Student.create(req.body);

  res.json(student);
});

router.post("/add-fees", async (req, res) => {

  const {
    className,
    amount,
    fine,
    description
  } = req.body;

  const students = await Student.find({ className });

  for (let student of students) {

    student.fees.push({
      amount,
      fine,
      description
    });

    await student.save();
  }

  res.json({ message: "Fees Added Successfully" });
});

router.get("/students", async (req, res) => {

  const students = await Student.find();

  res.json(students);
});

module.exports = router;