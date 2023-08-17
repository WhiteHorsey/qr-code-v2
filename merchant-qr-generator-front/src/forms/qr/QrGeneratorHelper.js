import * as yup from "yup";

export const initialValues = {
  label: "McDonalds",
  rib: "190780211110753297000605",
  price: 0,
};

export const validationSchema = yup.object({
  label: yup.string().required("Le nom est requis"),
  rib: yup.string().required("Le rib est requis"),
  price: yup
    .number()
    .nullable()
    .notRequired()
    .min(0)
    .test(
      "noEOrSign", // type of the validator (should be unique)
      "Number had an 'e' or sign.", // error message
      (value) => typeof value === "number" && !/[eE+-]/.test(value.toString())
    ),
});
