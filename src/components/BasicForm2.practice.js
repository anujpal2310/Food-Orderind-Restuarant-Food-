import { useFormik } from "formik";

const BasicForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            iagree: false
        },
        onSubmit: (data) => {
            console.log("Submitted data:  ", data)
        },
        onReset: val => console.log(val),
        validate: data => {
            let errors = {};
            if (!data.name) errors.name = "required";
            if (!data.email) errors.email = "required";
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) errors.email = "invalid email format"
            if (!data.phone) errors.phone = "required";
            if (!data.password) errors.password = "required";
            if (!data.iagree) errors.iagree = "accept all terms and conditions";
            return errors;
        }
    })
    // console.log(formik.errors);
    // console.log(formik.touched);

    return <div className="flex flex-col items-center">
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} action="" className="flex flex-col items-center bg-pink-100 p-7 rounded-3xl pt-10">

            <div className="mb-5">
                <label htmlFor="name" className="text-bold" > Name</label><br />
                <input type="text" name="name" id="name" className="p-1 w-80 rounded-xl pl-2" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                <div className="ml-3 text-red-500">{formik.touched.name && formik.errors.name}</div>
            </div>

            <div className="mb-5">
                <label htmlFor="name" > Email</label><br />
                <input type="email" name="email" id="email" className="p-1 w-80 rounded-xl pl-2" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                <div className="ml-3 text-red-500">{formik.touched.email && formik.errors.email}</div>
            </div>

            <div className="mb-5">
                <label htmlFor="name" > Phone</label><br />
                <input type="number" name="phone" id="phone" className="p-1 w-80 rounded-xl pl-2" onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} />
                <div className="ml-3 text-red-500">{formik.touched.phone && formik.errors.phone}</div>
            </div>

            <div>
                <label htmlFor="password"  >Password</label><br />
                <input type="password" name="password" id="password" className="p-1 w-80 rounded-xl pl-2" onChange={formik.handleChange} value={formik.password} onBlur={formik.handleBlur} />
                <div className="ml-3 text-red-500">{formik.touched.password && formik.errors.password}</div>
            </div>

            <div className="mt-5">
                <input type="checkbox" name="iagree" id="iagree" className=" h-3 w-8" onChange={formik.handleChange} value={formik.values.iagree} onBlur={formik.handleBlur} />
                <span>I agree all the terms and conditions</span>
                <div className="ml-3 text-red-500">{formik.touched.iagree && formik.errors.iagree}</div>
            </div>

            <div>
                <button type="reset" className="mt-5 bg-blue-400 p-3 rounded-2xl text-white text-lg mr-4">Reset</button>
                <button type="submit" className="mt-5 bg-blue-400 p-3 rounded-2xl text-white text-lg">Submit</button>
            </div>

        </form>
    </div>
}

export default BasicForm;