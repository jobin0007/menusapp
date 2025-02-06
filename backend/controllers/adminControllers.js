const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Admin = require('../model/adminSchema')





const adminControllers = {



    register: asyncHandler(async (req, res) => {
        const { name, email, password, mobile_number } = req.body
        if (!name || !email || !password || !mobile_number) {
            throw new Error("Please Fill All The Fields")
        }
        const admin = await Admin.findOne({ email, mobile_number })
        if (admin) {
            throw new Error("This Person Already Exist ")
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const createAdmin = await Admin.create({
            name,
            email,
            password: hashedPassword,
            mobile_number
        })
        if (!createAdmin) {
            throw new Error("Creation of Admin Failed")
        }
        const role = createAdmin.role
        const payload = {
            role,
            name,
            email
        }
        const token = jwt.sign(payload, process.env.PRIVATE_KEY)
        res.cookie('adminData', token, {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: false,
            sameSite: "none"
        })
        res.json({
            message: "Registration of Admin  Successfull",
            token

        })





    }),
    login: asyncHandler(async (req, res) => {
        const { email, password } = req.body
        if (!email || !password) {
            throw new Error("Please Fill All The Fields")
        }
        const foundAdmin = await Admin.findOne({ email })
        if (!foundAdmin || !foundAdmin.role == 'admin') {
            throw new Error("Admin not found")
        }

        const adminPassword = await bcrypt.compare(password, foundAdmin.password)
        if (!adminPassword) {
            throw new Error("Password Is Incorrect")
        }
        const token = jwt.sign({ adminId: foundAdmin._id, role: foundAdmin.role }, process.env.PRIVATE_KEY, { expiresIn: '4hr' })
        res.cookie('token', token, {
            maxAge: 2 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: false,
            sameSite: "none"
        })
        res.json({
            message: "Login Successfull",
            token
        })
    }
    ),
    getOneAdmin: asyncHandler(async (req, res) => {
     
     
        const { adminId } = req.params;

        const id = req.admin;
        if (!id) {
          throw new Error("Authentication failed");
        }
    
        if (!adminId) {
          throw new Error("Please provide the ID of the admin");
        }
      
    
        const adminFound = await Admin.findById(adminId);
        if (!adminFound) {
          throw new Error("Admin not found");
        }
        res.json({
          message: "Admin found Successfully ",
          adminFound,
        });
      })

 



}
module.exports = adminControllers