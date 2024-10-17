import { useContext, useEffect, useState } from "react";
import { userContext } from "../utils/Context";
import BasicForm from "./BasicForm";
import { Form, useLoaderData } from "react-router-dom";

const Contact = () => {
  const { user, setUser } = useContext(userContext);

  // console.log(user);
  const data = useLoaderData();
  console.log("Loader from: ", data);
  return (
    <div className="flex bg-yellow-50 p-8">
      <div>
        <h1 className="font-bold text-2xl pb-5">Contact page</h1>

        <input
          type="text"
          className="w-24 h-10 mr-10"
          onChange={(e) => setUser({ name: e.target.value, email: user.email })}
          value={user.name}
        />
      </div>

      <div className="m-10">
        <Form method="GET" action="/contact">
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="name">Email</label>
            <input type="text" name="email" />
          </div>
          <div>
            <button type="submit" className="bg-blue-400 p-0.5 rounded-2xl ml-10 mt-3">submit</button>
          </div>
        </Form>
      </div>


      {
        // Formik validated form
        /* <BasicForm /> */

      }
    </div>
  );
};
export default Contact;






