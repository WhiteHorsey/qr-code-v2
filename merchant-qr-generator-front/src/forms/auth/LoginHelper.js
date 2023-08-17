import * as yup from "yup";

export const initialValues = {
  username: "",
  password: "",
};

export const validationSchema = yup.object({
  username: yup.string().required("Le nom est requis"),
  password: yup.string().required("Le rib est requis"),
});
