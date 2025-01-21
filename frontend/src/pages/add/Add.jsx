import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "./Add.module.css";
import { Helmet } from "react-helmet-async";

const AddSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  desc: Yup.string()
    .min(2, "Too Short!")
    .max(200, "Too Long!")
    .required("Required"),
  img: Yup.string().url().required("Required"),
});

function Add() {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      let res = await axios.get("http://localhost:5000/products/");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setData([...data].filter((item) => item._id != id));
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, [setData]);

  return (
    <div className="px-16 py-44 flex flex-col gap-10 items-center justify-center">
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <Formik
        initialValues={{
          title: "",
          desc: "",
          img: "",
        }}
        validationSchema={AddSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await axios.post("http://localhost:5000/products", values);
            await getData();
            resetForm();
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-3 w-6/12">
            <Field
              name="title"
              placeholder="Title..."
              className="w-full border rounded p-2 text-xl"
            />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}
            <Field
              name="desc"
              placeholder="Description..."
              className="w-full border rounded p-2 text-xl"
            />
            {errors.desc && touched.desc ? <div>{errors.desc}</div> : null}
            <Field
              name="img"
              placeholder="Image..."
              className="w-full border rounded p-2 text-xl"
            />
            {errors.img && touched.img ? <div>{errors.img}</div> : null}
            <button
              type="submit"
              className="p-2 bg-orange-500 rounded-md text-white text-2xl"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
      <table className={styles.table}>
        <tr>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        {data.map((data) => (
          <tr key={data._id}>
            <td>{data.title}</td>
            <td>
              <img src={`${data.img}`} alt="" className="w-30 h-20" />
            </td>
            <td>{data.desc}</td>
            <td>
              <button
                onClick={() => handleDelete(data._id)}
                className="p-2 bg-rose-600 rounded text-white"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Add;
