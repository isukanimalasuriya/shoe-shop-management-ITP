import User from "../modeles/user.js";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config()

export function registerUser(req, res){

    const data = req.body

    data.password = brcypt.hashSync(data.password, 10)

    const newUser = new User(data)

    newUser.save()
        .then(()=>{
            res.json({
                message: "User saved success"
            });
        })
        .catch((error)=>{
            res.status(500).json({error: "User registration failed"})
    });
}

export function loginUser(req, res){

    const data = req.body

    User.findOne({
        email: data.email
    }).then(
        (user)=>{
            
            if(user==null){
                res.status(404).json({error: "User not found"})
            }else{

                const isPasswordCorrect = brcypt.compareSync(data.password, user.password)

                if(isPasswordCorrect){
                    const token = jwt.sign({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        profilePic: user.profilePic
                    }, process.env.JWT_SECRET)
                    res.json({message: "Login success", token:token, user: user})
                }else{
                    res.status(401).json({error: "Login failed"})
                }
            }
        }
    )

}

function sendOTP(email, otp) {
    // Implement logic to send OTP via email or SMS
    // For example, using nodemailer for email:
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-password'
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your OTP',
        text: `Your OTP is: ${otp}`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });
}