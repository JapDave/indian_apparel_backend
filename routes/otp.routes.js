const express=require("express")
const otpRouter=express.Router()
const otpController=require("../controller/otpController")
otpRouter.post("/otp/send",otpController.generateOtp)