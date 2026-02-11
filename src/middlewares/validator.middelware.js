import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validateRequest = (req, res, next) => {
  const error = validateRequest(req);
  if (error.isEmpty()) {
    return next();
  }
  const expectedErrors = error
    .array()
    .map((err) => expectedErrors.push({ [err.path]: err.msg }));
  throw new ApiError(422, "recieved data is not valid ", expectedErrors);
};
