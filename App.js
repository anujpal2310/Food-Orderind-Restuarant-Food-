import React from "react";
import ReactDOM from "react-dom/client";
import appRouter from "./src/routes/Routes";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
