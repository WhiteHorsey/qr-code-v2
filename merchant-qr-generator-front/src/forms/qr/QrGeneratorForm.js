import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import QrGenerator from "../../components/QrGenerator";
import { validationSchema, initialValues } from "./QrGeneratorHelper";
import { v4 as uuidv4 } from "uuid";

function QrGeneratorForm({ setNotifications }) {
  const [show, setShow] = useState(false);
  return (
    <div style={{ width: "65%" }}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={(values) => {
          setShow(true);
          setNotifications((prevList) => [...prevList, { ...values, id: uuidv4(), isPaid: false }]);
        }}
      >
        {({ handleChange, handleBlur, values, errors, setFieldValue }) => (
          <Form className="bg-white">
            <Field
              className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              name="label"
              placeholder="Label"
              disabled
            />
            <Field
              className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              name="rib"
              placeholder="RIB"
              disabled
            />
            <Field
              type="number"
              className="my-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              name="price"
              placeholder="Prix"
            />
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              générer
            </button>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
            {show && <QrGenerator values={values} />}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default QrGeneratorForm;
