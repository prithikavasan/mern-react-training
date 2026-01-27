const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../models/Admin')
const Student = require('../models/Student')
exports.AdminRegister = async (req, res) => {
  try {
    const { name, email, password, role } = req.body
    const adminExists = await Admin.findOne({ email })
    if (adminExists) {
      return res.status(400).json({ message: "Admin already exists" })
    }

    const studentExists = await Student.findOne({ email })
    if (studentExists) {
      return res.status(400).json({ message: "Email already exists as student" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await Admin.create({
      name,
      email,
      password: hashedPassword,
      role
    })

    res.status(201).json({ message: "Admin created successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const admin = await Admin.findOne({ email })
    if (!admin) {
      return res.status(400).json({ message: "Admin not found" })
    }

    const student = await Student.findOne({ email })
    if (student) {
      return res.status(400).json({ message: "Role mismatch. You are a student" })
    }
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: admin._id },
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
