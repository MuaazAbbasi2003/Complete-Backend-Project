import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: "https://placehold.co/200x200",
        localPath: "",
      },
    },
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullname: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password required"],
    },
    isEmailVerified: {
      type: Boolean,
      default: true,
    },
    refreshToken: {
      type: string,
    },
    forgotPasswordToken: {
      type: string,
    },
    forgotPasswordExpiry: {
      type: Date,
    },
    emailVerificationToken: {
      type: string,
    },
    emailVerificationExpiry: {
      type: string,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("User", userSchema);
