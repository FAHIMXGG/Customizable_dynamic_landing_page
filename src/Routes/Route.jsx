/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../Test/Test";
import HomeComponent from "../components/dashboard/HomeComponent";
import Cover from "../components/dashboard/Cover/Cover";
import FooterComponent from "../components/Footer/FooterComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/header",
        element: <HomeComponent />,
      },
      {
        path: "/footer",
        element: <FooterComponent />,
      },
    ],
  },
  {
    path: "/mobile",
    element: <Cover />,
  },
  {
    path: "test",
    element: <Test />,
  },
]);
export default router;
