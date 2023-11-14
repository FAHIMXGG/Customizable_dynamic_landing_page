import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <div className="max-w-screen-2xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </AuthProvider>
)
