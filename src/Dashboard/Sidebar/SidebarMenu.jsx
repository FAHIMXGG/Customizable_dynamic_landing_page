/** @format */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ActiveLink from "../../components/dashboard/ActiveLink";
const SidebarMenu = () => {
  return (
    <div className="w-40 h-full rounded-[20px] bg-base-100 sidebar p-5 space-y-4">
      <h2>Dashboard</h2>
      <div>
        <h2>Media</h2>
        <ul className="font-normal pl-2 text-gray-600">
          <li>gif</li>
          <li>videos</li>
          <li>icons</li>
          <li>Infographic</li>
        </ul>
      </div>
      <div>
        <h2>Component</h2>
        <ul className="font-normal pl-2 text-gray-600">
          <li>
            <ActiveLink to={"/header"}>Header</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/footer">Footer</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/pricing">Pricing</ActiveLink>          
          </li>
          <li><ActiveLink to="/testimonial">Testimonial</ActiveLink>  </li>
          <li><ActiveLink to="/blog">Blog</ActiveLink></li>
          <li><ActiveLink to="/contact">Contact US</ActiveLink></li>
          <li><ActiveLink to="/team">Team</ActiveLink></li>
          <li><ActiveLink to="/CTA">CTA</ActiveLink></li>
        </ul>
      </div>
      <h2>Project</h2>
      <h2>User</h2>
      <h2>Branding setup</h2>
      <h2>All in SEO</h2>
      <h2>Proformance</h2>
      <h2>Analylics</h2>
      <h2>Payment</h2>
      <h2>Navigation</h2>
    </div>
  );
};

export default SidebarMenu;
