import { createBrowserRouter } from "react-router-dom";
import Test from "../Test/Test";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Test/>
    }
]);
export default router;