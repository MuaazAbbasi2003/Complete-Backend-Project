import { body } from "express-validator";

const registerUserValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("email is required")
      .isEmail()
      .withMessage("email.isInvalid"),
    body("username")
      .trim()
      .notEmpty()
      .withMessage("username is required ")
      .isLowercase()
      .withMessage("username must be in lower case  ")
      .isLength({ min: 3 })
      .withMessage("Length must be greator or equal to 3 characters "),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required ")
      .isLength({ min: 8 })
      .withMessage("password length must be greator or equal to 8 characters "),
    body("fullName")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("fullname must not be empty "),
  ];
};
const loginUserValidator = () => {
  return [
    body("email").optional().isEmail().withMessage("email is invalid"),
    body("password").notEmpty().withMessage("password is required"),
  ];
};
export { registerUserValidator, loginUserValidator };
