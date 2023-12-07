import * as Yup from "yup";

export const FormValidation = Yup.object({
  fullname: Yup.string().min(5).required("Full Name is required"),
  email: Yup.string().email("Enter Valid Email").required("Enter Email"),
  address: Yup.string(5).required("Address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string(5).required("State is required"),
  city: Yup.string(5).required("City is required"),
  zipcode: Yup.string().max(5).required("Zipcode is required"),
});
