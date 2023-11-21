/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../Test/Test";
import HomeComponent from "../components/dashboard/HomeComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <HomeComponent />,
      },
    ],
  },
  {
    path: "/mobile",
    element: <HomeComponent />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);
export default router;
