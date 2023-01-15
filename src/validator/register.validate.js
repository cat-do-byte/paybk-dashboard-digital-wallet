import * as yup from "yup"

export const registerValidator = yup
  .object({
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required()
