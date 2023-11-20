/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../Test/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: "Dynamic Layout goes here",
      },
    ],
  },
  {
    path:'test',
    element: <Test/>
  }
]);
export default router;
