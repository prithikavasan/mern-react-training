const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const Student=require('../models/Student')
const Admin=require('../models/Admin')

exports.StudRegister = async (req, res) => {
  try {
    const { name, email, password, age, department } = req.body

    const studentExists = await Student.findOne({ email })
    if (studentExists) {
      return res.status(400).json({ message: "Student already exists" })
    }

    const adminExists = await Admin.findOne({ email })
    if (adminExists) {
      return res.status(400).json({ message: "Email already registered as admin" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await Student.create({
      name,
      email,
      password: hashedPassword,
      role: "student",
      age,
      department,
      isActive: true
    })

    res.status(201).json({ message: "Student registered successfully" })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const student = await Student.findOne({ email })
    if (!student) {
      return res.status(400).json({ message: "Student not found" })
    }

    const admin = await Admin.findOne({ email })
    if (admin) {
      return res.status(400).json({ message: "Role mismatch. You are an admin" })
    }

    const isMatch = await bcrypt.compare(password, student.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: student._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )

    res.status(200).json({
      message: "Login successful",
      token
    })

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
