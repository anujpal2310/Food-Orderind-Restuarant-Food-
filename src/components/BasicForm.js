import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { redirect, useNavigate } from "react-router-dom";
import { boolean, number, object, string } from "yup";

const BasicForm = () => {
  const initialValues = {
    name: {
      fname: "",
      lname: ""
    },
    email: "",
    phone: "",
    password: "",
    iagree: false,
    description: ""
  }
  const validationSchema = object({
    name: object({
      fname: string().required("required"),
      lname: string().required("required")
    }),
    email: string().email("inValid email format").required("required"),
    // phone: number().required("required"),
    // password: string().required("required"),
    // iagree: boolean().required("required").isTrue("accept all terms and Cond..."),
    // description: string().required("Required")
  })
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log("Submitted data:  ", data);
    navigate("/");
    // alert("success")
    // window.location.replace("/")
  }

  return <div className="flex flex-col items-center">
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
      <Form action="/cart" method="GET" className="flex flex-col items-center bg-pink-100 p-7 rounded-3xl pt-10">
        <h1 className="text-2xl">Signup</h1>

        <div className="mb-5">
          <label htmlFor="fname" className="text-bold" >First Name</label><br />
          <Field type="text" name="name.fname" id="fname" className="p-1 w-80 rounded-xl pl-2" />
          <div className="text-red-500 pl-3">
            <ErrorMessage name="name.fname" />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="lname" className="text-bold" >Last Name</label><br />
          <Field type="text" name="name.lname" id="lname" className="p-1 w-80 rounded-xl pl-2" />
          <div className="text-red-500 pl-3">
            <ErrorMessage name="name.lname" />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="name" > Email</label><br />
          <Field type="email" name="email" id="email" className="p-1 w-80 rounded-xl pl-2" />
          <div className="text-red-500 pl-3">
            <ErrorMessage name="email" />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="name" > Phone</label><br />
          <Field type="number" name="phone" id="phone" className="p-1 w-80 rounded-xl pl-2" />
          <div className="text-red-500 pl-3">
            <ErrorMessage name="phone" />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="password"  >Password</label><br />
          <Field type="password" name="password" id="password" className="p-1 w-80 rounded-xl pl-2" />
          <div className="text-red-500 pl-3">
            <ErrorMessage name="password" />
          </div>
        </div>

        <Field name="description" id="description" className="p-1 w-80 rounded-xl pl-2 mb-2" >
          {
            (props) => {
              const { field, meta, form } = props
              {/* console.log(props); */ }
              return <div> <textarea name="" id="" cols="32" rows="3" className="p-1 w-80 rounded-xl pl-2 mb-2" {...field} />
                <div className="text-red-500 pl-3">
                  {meta.touched && meta.error ? meta.error : null}
                  {/* <ErrorMessage name="description" /> */}
                </div>
              </div>
            }
          }
        </Field>

        <div className="mt-5">
          <Field type="checkbox" name="iagree" id="iagree" className=" h-3 w-8" />
          <span>I agree all the terms and conditions</span>
          <div className="text-red-500 pl-3">
            <ErrorMessage name="iagree" />
          </div>
        </div>

        <div>
          <button type="reset" className="mt-5 bg-blue-400 p-3 rounded-2xl text-white text-lg mr-4">Reset</button>
          <button type="submit" className="mt-5 bg-blue-400 p-3 rounded-2xl text-white text-lg">Submit</button>
        </div>

      </Form>
    </Formik>
  </div>
}

export default BasicForm;



{
  // <div>
  //   <label htmlFor="description"  >Description</label><br />
  //   <Field as="textarea" name="description" id="description" className="p-1 w-80 rounded-xl pl-2 mb-2" />
  //   <div className="text-red-500 pl-3">
  //     <ErrorMessage name="description" />
  //   </div>
  // </div>
}