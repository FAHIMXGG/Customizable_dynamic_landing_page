/** @format */

import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Test from "../Test/Test";
import HomeComponent from "../components/dashboard/HomeComponent";
import Cover from "../components/dashboard/Cover/Cover";
import FooterComponent from "../components/Footer/FooterComponent";
import PricingComponent from "../components/Pricing/PricingComponent";
import BlogComponent from "../components/Blog/BlogComponent";
import TestimonialComponent from "../components/Testimonial/TestimonialComponent";
import ContactComponent from "../components/Contact/ContactComponent";
import TeamComponent from "../components/Team/TeamComponent";
import CTAComponent from "../CTA/CTAComponent";
import TestHome from "../Test/TestHome";

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
      {
        path: "/pricing",
        element: <PricingComponent />,
      },
      {
        path: "/testimonial",
        element: <TestimonialComponent />,
      },
      {
        path: "/blog",
        element: <BlogComponent />,
      },
      {
        path: "/contact",
        element: <ContactComponent />,
      },
      {
        path: "/team",
        element: <TeamComponent />,
      },
      {
        path: "/CTA",
        element: <CTAComponent />,
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
  ,
  {
    path: "testh",
    element: <TestHome/>,
  }
]);
export default router;
