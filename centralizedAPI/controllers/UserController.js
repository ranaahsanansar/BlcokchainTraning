import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import transporter from "../config/emailConfig.js";

import sgMail from '@sendgrid/mail'

class UserController {
    // User Singup Functionality -------------------------------------------


    static userRegistration = async (req, res) => {
        // console.log("Ok Ha99");

        const { name, email, password, password_confirmation, tc } = req.body;
        const user = await UserModel.findOne({ email: email });

        if (user) {
            if (user.veri == true) {
                res.send({ "status": "failed", "message": "Email Already Exists!" });
            } else {
                if (name && email && password && password_confirmation && tc) {
                    if (password === password_confirmation) {
                        try {
                            // Password hashing 
                            const salt = await bcrypt.genSalt(10);
                            const hashPassword = await bcrypt.hash(password, salt);
                            // Get Data into an Object 
                            const doc = new UserModel({
                                name: name,
                                email: email,
                                password: hashPassword,
                                tc: tc
                            });
                            // Saving Data into DataBase 
                            // console.log("Ok Ha");
                            await doc.save();
                            // console.log("Ok Ha2");

                            // JWT Tokenization 
                            await UserModel.findByIdAndDelete(user._id)
                            const saved_user = await UserModel.findOne({ email: email });
                            // Gentrating JWT Token 
                            const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_KEY, { expiresIn: '5d' });
                            const Key = saved_user._id + process.env.JWT_KEY;
                            const emailToken = jwt.sign({ userID: saved_user._id }, Key, { expiresIn: '5m' });
                            const link = `http://127.0.0.1:8000/api/user/user-verification/${saved_user._id}/${emailToken}`;

                            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                            const message = {
                                to: email,
                                from: 'asn.cs21@gmail.com',
                                subject: 'Account Password Reset',
                                text: `Forgotten Password link`,
                                html: `<p>Please click the following link to reset your account:</p><a href="${link}">Click Me</a>`,
                            };
                            sgMail.send(message).then((response) => {
                                res.send({ "status": "success", "message": "Check your Email for Verification", "token": token });
                            }).catch((err) => {
                                console.log(err)
                                res.status(404).send({ "status": "error", "message": err })
                            })

                            // res.status(201).send({ "status": "success", "message": "Registerd Successfull", "token": token });
                        } catch (error) {
                            res.send({ "status": "failed", "message": "Not save DataBase Error!" });
                        }
                    } else {
                        res.send({ "status": "failed", "message": "Password Not Matched!" });
                    }
                } else {
                    res.send({ "status": "failed", "message": "All fields are required!" });
                }
            }

        } else {
            if (name && email && password && password_confirmation && tc) {
                if (password === password_confirmation) {
                    try {
                        // Password hashing 
                        const salt = await bcrypt.genSalt(10);
                        const hashPassword = await bcrypt.hash(password, salt);
                        // Get Data into an Object 
                        const doc = new UserModel({
                            name: name,
                            email: email,
                            password: hashPassword,
                            tc: tc
                        });
                        // Saving Data into DataBase 
                        // console.log("Ok Ha");
                        await doc.save();
                        // console.log("Ok Ha2");

                        // JWT Tokenization 
                        const saved_user = await UserModel.findOne({ email: email });
                        // Gentrating JWT Token 
                        const token = jwt.sign({ userID: saved_user._id }, process.env.JWT_KEY, { expiresIn: '5d' });
                        const Key = saved_user._id + process.env.JWT_KEY;
                        const emailToken = jwt.sign({ userID: saved_user._id }, Key, { expiresIn: '5m' });
                        const link = `http://127.0.0.1:8000/api/user/user-verification/${saved_user._id}/${emailToken}`;

                        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                        const message = {
                            to: email,
                            from: 'asn.cs21@gmail.com',
                            subject: 'Account Password Reset',
                            text: `Forgotten Password link`,
                            html: `<p>Please click the following link to reset your account:</p><a href="${link}">Click Me</a>`,
                        };
                        sgMail.send(message).then((response) => {
                            res.send({ "status": "success", "message": "Check your Email for Verification", "token": token });
                        }).catch((err) => {
                            console.log(err)
                            res.status(404).send({ "status": "error", "message": err })
                        })

                        // res.status(201).send({ "status": "success", "message": "Registerd Successfull", "token": token });
                    } catch (error) {
                        res.send({ "status": "failed", "message": "Not save DataBase Error!" });
                    }
                } else {
                    res.send({ "status": "failed", "message": "Password Not Matched!" });
                }
            } else {
                res.send({ "status": "failed", "message": "All fields are required!" });
            }
        }
    }

    // User Login Functionlity 
    static userLogin = async (req, res) => {
        try {
            const { email, password } = req.body;
            if (email && password) {
                const user = await UserModel.findOne({ email: email });
                if (user != null) {
                    if (user.veri == true) {
                        const isMatch = await bcrypt.compare(password, user.password);
                        if (user.email === email && isMatch) {
                            const token = jwt.sign({ userID: user }, process.env.JWT_KEY, { expiresIn: '10m' });

                            res.status(201).send({ "status": "success", "message": "User Login Succes!", "token": token });

                        } else {
                            res.send({ "status": "failed", "message": "Incorrect Password!" });
                        }
                    }else{
                        res.send({"status": "failed", "message": "User not Verify. Check your email to verify!" })
                    }

                } else {
                    res.send({ "status": "failed", "message": "User not Found. Incorrect Email!" });
                }
            } else {
                res.send({ "status": "failed", "message": "All fields are required!" });
            }
        } catch (error) {
            console.log(error);
            res.send({ "status": "failed", "message": "Unable to GetResponse from DataBase" });
        }
    }

    static changUserPass = async (req, res) => {
        const { password, password_confirmation } = req.body;
        if (password && password_confirmation) {
            if (password === password_confirmation) {
                const salt = await bcrypt.genSalt(10);
                const newHashPassword = await bcrypt.hash(password, salt);
                await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } });
                res.send({ "status": "Success", "message": "Password was Changed Succesfully !" })
            } else {
                res.send({ "status": "failed", "message": "Confirmed Password Not Matched!" });
            }
        } else {
            res.send({ "status": "failed", "message": "All fields are required!" });
        }


    }

    static loggedUser = async (req, res) => {
        res.send({ "user": req.user });
    }

    static sendResetPasswordEmail = async (req, res) => {
        const { email } = req.body;
        if (email) {
            const user = await UserModel.findOne({ email: email });


            if (user) {
                const Key = user._id + process.env.JWT_KEY;
                const emailToken = jwt.sign({ userID: user._id }, Key, { expiresIn: '15m' });
                const link = `http://127.0.0.1:3000/api/user/user-verification/${user._id}/${emailToken}`;
                // console.log(link);
                // let info = await transporter.sendMail({
                //     from: process.env.EMAIL_FROM,
                //     to: user.email,
                //     subject: "ASN Password Reset Mail",
                //     html: `<a href=${link}>Click Here to Reset Password</a>`
                // })
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const message = {
                    to: email,
                    from: 'asn.cs21@gmail.com',
                    subject: 'Account Password Reset',
                    text: `Forgotten Password link`,
                    html: `<p>Please click the following link to reset your account:</p><a href="${link}">Click Me</a>`,
                };
                sgMail.send(message).then((response) => {
                    res.send({ "status": "success", "message": "Your reset link is send to your email please verify with in 15 mintues!" });
                }).catch((err) => {
                    console.log(err)
                    res.status(404).send({ "status": "error", "message": err })
                })
                // old version 
                // res.send({ "status": "success", "message": "Your reset link is send to your email please verify with in 15 mintues!" , "info": info });
            } else {
                res.send({ "status": "failed", "message": "Email does not Exists!" });
            }

        } else {
            res.send({ "status": "failed", "message": "Email fields is required!" });
        }
    }


    static userVerificationEmail = async (req, res) => {
        const { id, token } = req.params;

        const user = await UserModel.findById(id);
        const new_key = user._id + process.env.JWT_KEY;
        try {
            jwt.verify(token, new_key);

            await UserModel.findByIdAndUpdate(id, { $set: { veri: true } });


            res.send({ "status": "success", "message": "Email Verify! Please Login to your account" });
        } catch (err) {
            res.send({ "status": "failed", "message": "Invalid Token!" });
        }
    }

    static forgottenPasswordReset = async (req, res) => {
        const { password, password_confirmation } = req.body
        const { id, token } = req.params
        const user = await UserModel.findById(id);
        const new_Key = user._id + process.env.JWT_KEY;
        try {
            jwt.verify(token, new_Key);

            if (password && password_confirmation) {
                if (password === password_confirmation) {
                    const salt = await bcrypt.genSalt(10);
                    const resetHashPassword = await bcrypt.hash(password, salt);
                    await UserModel.findByIdAndUpdate(id, { $set: { password: resetHashPassword } });
                    res.send({ "status": "success", "message": "Password Reset Success!" });
                } else {
                    res.send({ "status": "failed", "message": "Password Not matched!" });
                }
            } else {
                res.send({ "status": "failed", "message": "All fields are required!" });
            }
        } catch (error) {
            res.send({ "status": "failed", "message": "Invalid Token!" });
        }
    }

}

export default UserController;