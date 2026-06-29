import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    lastName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
    },

    phoneNumber: {
      type: String,
      required: [true, "Phone Number is required"],
      trim: true,
    },

    address: {
      type: String,
    },

    state:{
      type: String,
      enum: ["Punjab", "Haryana"],
      required: true,
    },
    
    city: {
      type: String,
      required: true,
    },

    gender:{
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, 
    },

    designation: {
      type: String,
      required: true,
      enum: ["Admin","Lifeguard"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (password) {
   return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema);
