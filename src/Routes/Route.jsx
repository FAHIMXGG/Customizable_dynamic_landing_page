/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";

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
]);
export default router;
