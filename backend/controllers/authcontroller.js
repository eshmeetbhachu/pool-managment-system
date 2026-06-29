import {User} from "../models/User.js";
import jwt from "jsonwebtoken";

const registerUser = async (req, res) => {

  console.log("Request received");
console.log(req.body);

  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      state,
      city,
      gender,
      password,
      confirmPassword,
      designation,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    console.log("Creating user...");

    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      state,
      city,
      gender,
      password,
      designation
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        state: user.state,
        city: user.city,
        gender: user.gender,
        designation: user.designation,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
  console.log("User created");
};


const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await user.isPasswordCorrect(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const fetchUser = async (req,res) => {
  try {
    const staff = await User.find();
    res.status(200).json(staff);
    
  } catch (error) {
      res.status(500).json({
        message : error.message
      })
  }
}

export {registerUser,loginUser,fetchUser};