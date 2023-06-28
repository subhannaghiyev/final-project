import * as yup from "yup";
export const ProductForm = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  username: yup.string().required(),
  password: yup.string().required(),
})
.required();
