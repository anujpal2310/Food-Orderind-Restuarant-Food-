import Body from "../components/Body";
// import Body from "../components/About"
import About from "../components/About";
import Contact from "../components/Contact";
import Restuarant from "../components/Restuarant";
import Error from "../components/Error";
import { createBrowserRouter, json, redirect } from "react-router-dom";
import AppLayout from "../../AppLayout";
import Cart from "../components/Cart";
import Login from "../components/Login";

let auth = false;

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    loader: async (props) => {
      // console.log("Loader: ", props)
      if (!auth) {
        auth = true;
        return redirect("/signup")
      }
      return json({ name: "Rahul", email: "satyam@gmail.com" }, { status: 200 });
    },
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        caseSensitive: false,
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: async ({ request, params }) => {
          console.log("Action sent: ")
        },
      },
      {
        path: "/restuarant/:id",
        element: <Restuarant />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

export default appRouter;
